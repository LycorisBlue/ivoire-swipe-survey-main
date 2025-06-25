/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useSurveyValidation } from '@/hooks/useSurveyValidation';
import { useSurveyTransition } from '@/hooks/useSurveyTransition';
import SurveyQuestion from './SurveyQuestion';
import { surveyQuestions } from './data/surveyQuestions';

interface SurveyAnswers {
  [key: string]: any;
}

const Survey: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswers>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const { canGoNext } = useSurveyValidation();
  const { isTransitioning, slideDirection, handleTransition } = useSurveyTransition();

  const updateAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      handleTransition('next', () => {
        setCurrentQuestion(prev => prev + 1);
      });
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      handleTransition('previous', () => {
        setCurrentQuestion(prev => prev - 1);
      });
    }
  };

  const handleSkip = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      handleTransition('next', () => {
        setCurrentQuestion(prev => prev + 1);
      });
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
  };

  // Swipe functionality
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;

      const diffX = startX - endX;
      const diffY = startY - endY;

      const currentQ = surveyQuestions[currentQuestion];
      const currentAnswer = answers[currentQ.id];

      // Only trigger swipe if horizontal movement is greater than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0 && (canGoNext(currentQ, currentAnswer) || !currentQ.required)) {
          // Swipe left - next question
          handleNext();
        } else if (diffX < 0 && currentQuestion > 0) {
          // Swipe right - previous question
          handlePrevious();
        }
      }

      startX = 0;
      startY = 0;
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentQuestion, answers, canGoNext]);

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50/80 via-white/90 to-green-100/60">
        <div className="w-full max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Merci pour votre participation !
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Vos réponses nous aideront à mieux comprendre les habitudes d'achat au marché en Côte d'Ivoire.
          </p>
          <Button
            onClick={handleRestart}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
          >
            Recommencer le sondage
          </Button>
        </div>
      </div>
    );
  }

  const currentQ = surveyQuestions[currentQuestion];
  const currentAnswer = answers[currentQ.id];
  const isNextDisabled = !canGoNext(currentQ, currentAnswer) && currentQ.required;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50/80 via-white/90 to-green-100/60 overflow-hidden">
      <div className="w-full max-w-2xl mx-auto relative">

        {/* Question Container avec animation */}
        <div className="relative w-full">
          <div className={`transition-all duration-300 ease-in-out ${isTransitioning
            ? slideDirection === 'next'
              ? 'transform translate-x-full opacity-0'
              : 'transform -translate-x-full opacity-0'
            : 'transform translate-x-0 opacity-100'
            }`}>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-green-600 mb-2">
                <span>Question {currentQuestion + 1}</span>
                <span>{currentQuestion + 1} sur {surveyQuestions.length}</span>
              </div>
              <div className="w-full bg-green-100/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestion + 1) / surveyQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Component */}
            <SurveyQuestion
              question={currentQ}
              answer={currentAnswer}
              onChange={(value) => updateAnswer(currentQ.id, value)}
            />

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="border-green-200 text-green-700 hover:bg-green-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Précédent
              </Button>

              <div className="flex gap-3">
                {!currentQ.required && (
                  <Button
                    onClick={handleSkip}
                    variant="outline"
                    className="border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    Passer
                  </Button>
                )}

                <Button
                  onClick={handleNext}
                  disabled={isNextDisabled}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                >
                  {currentQuestion === surveyQuestions.length - 1 ? 'Terminer' : 'Suivant'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Skip option for optional questions */}
            {!currentQ.required && (
              <div className="flex justify-center mt-4">
                <label className="flex items-center text-sm text-gray-500 cursor-pointer" onClick={handleSkip}>
                  <input type="checkbox" className="sr-only" />
                  <span className="text-xs">Cette question est optionnelle - vous pouvez la passer</span>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;