/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import TextInput from './questions/TextInput';
import NumberInput from './questions/NumberInput';
import Checkbox from './questions/Checkbox';
import MultipleChoice from './questions/MultipleChoice';
import Dropdown from './questions/Dropdown';
import SliderInput from './questions/SliderInput';
import DatePicker from './questions/DatePicker';
import SatisfactionScale from './questions/SatisfactionScale';
import RadioGroup from './questions/RadioGroup';
import TextArea from './questions/TextArea';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface SurveyAnswers {
  [key: string]: any;
}

const Survey: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswers>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'previous'>('next');

  const questions = [
    {
      id: 'name',
      question: 'Quel est votre nom complet ?',
      component: 'text',
      placeholder: 'Entrez votre nom et prénoms',
      required: true
    },
    {
      id: 'age',
      question: 'Quel âge avez-vous ?',
      component: 'number',
      placeholder: 'Votre âge en années',
      min: 18,
      max: 100,
      required: true
    },
    {
      id: 'newsletter',
      question: 'Souhaitez-vous recevoir notre newsletter avec les dernières offres du marché ?',
      component: 'checkbox',
      label: 'Oui, je souhaite recevoir la newsletter',
      required: false
    },
    {
      id: 'products',
      question: 'Quels types de produits achetez-vous habituellement au marché ? (Plusieurs réponses possibles)',
      component: 'multiple',
      options: ['Légumes frais', 'Fruits', 'Viandes et poissons', 'Épices et condiments', 'Céréales et légumineuses', 'Produits transformés'],
      required: false
    },
    {
      id: 'city',
      question: 'Dans quelle ville faites-vous vos courses au marché ?',
      component: 'dropdown',
      placeholder: 'Sélectionnez votre ville',
      options: ['Abidjan', 'Bouaké', 'Daloa', 'Yamoussoukro', 'San-Pédro', 'Korhogo', 'Man', 'Divo', 'Gagnoa', 'Abengourou'],
      required: false
    },
    {
      id: 'budget',
      question: 'Quel est votre budget moyen par visite au marché (en FCFA) ?',
      component: 'slider',
      min: 1000,
      max: 50000,
      step: 1000,
      label: 'FCFA',
      required: true
    },
    {
      id: 'lastVisit',
      question: 'Quand avez-vous fait vos dernières courses au marché ?',
      component: 'date',
      placeholder: 'Sélectionnez une date',
      required: false
    },
    {
      id: 'satisfaction',
      question: 'Comment évaluez-vous votre satisfaction générale concernant vos achats au marché ?',
      component: 'satisfaction',
      required: true
    },
    {
      id: 'frequency',
      question: 'À quelle fréquence vous rendez-vous au marché ?',
      component: 'radio',
      options: ['Tous les jours', '2-3 fois par semaine', 'Une fois par semaine', '2-3 fois par mois', 'Rarement'],
      required: false
    },
    {
      id: 'comments',
      question: 'Avez-vous des commentaires ou suggestions pour améliorer votre expérience d\'achat au marché ?',
      component: 'textarea',
      placeholder: 'Partagez vos commentaires et suggestions...',
      required: false
    }
  ];

  const updateAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const canGoNext = () => {
    const currentQ = questions[currentQuestion];
    const answer = answers[currentQ.id];
    
    // If question is not required, allow skipping
    if (!currentQ.required) return true;
    
    if (!answer) return false;
    
    switch (currentQ.component) {
      case 'text':
      case 'number':
      case 'textarea':
        return typeof answer === 'string' && answer.trim().length > 0;
      case 'checkbox':
        return typeof answer === 'boolean';
      case 'multiple':
        return Array.isArray(answer) && answer.length > 0;
      case 'dropdown':
      case 'radio':
        return typeof answer === 'string' && answer.length > 0;
      case 'slider':
      case 'satisfaction':
        return typeof answer === 'number' && answer > 0;
      case 'date':
        return answer instanceof Date;
      default:
        return false;
    }
  };

  const handleTransition = (direction: 'next' | 'previous', callback: () => void) => {
    setSlideDirection(direction);
    setIsTransitioning(true);
    
    setTimeout(() => {
      callback();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
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
    if (currentQuestion < questions.length - 1) {
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
      
      // Only trigger swipe if horizontal movement is greater than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0 && (canGoNext() || !questions[currentQuestion].required)) {
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
  }, [currentQuestion, canGoNext]);

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

  const currentQ = questions[currentQuestion];
  const renderQuestionComponent = () => {
    const answer = answers[currentQ.id];

    switch (currentQ.component) {
      case 'text':
        return (
          <TextInput
            value={answer || ''}
            onChange={(value) => updateAnswer(currentQ.id, value)}
            placeholder={currentQ.placeholder}
          />
        );
      case 'number':
        return (
          <NumberInput
            value={answer || ''}
            onChange={(value) => updateAnswer(currentQ.id, value)}
            placeholder={currentQ.placeholder}
            min={currentQ.min}
            max={currentQ.max}
          />
        );
      case 'checkbox':
        return (
          <Checkbox
            checked={answer || false}
            onChange={(checked) => updateAnswer(currentQ.id, checked)}
            label={currentQ.label}
          />
        );
      case 'multiple':
        return (
          <MultipleChoice
            options={currentQ.options}
            selectedOptions={answer || []}
            onChange={(selected) => updateAnswer(currentQ.id, selected)}
          />
        );
      case 'dropdown':
        return (
          <Dropdown
            options={currentQ.options}
            value={answer || ''}
            onChange={(value) => updateAnswer(currentQ.id, value)}
            placeholder={currentQ.placeholder}
          />
        );
      case 'slider':
        return (
          <SliderInput
            value={answer || currentQ.min}
            onChange={(value) => updateAnswer(currentQ.id, value)}
            min={currentQ.min}
            max={currentQ.max}
            step={currentQ.step}
            label={currentQ.label}
          />
        );
      case 'date':
        return (
          <DatePicker
            value={answer}
            onChange={(date) => updateAnswer(currentQ.id, date)}
            placeholder={currentQ.placeholder}
          />
        );
      case 'satisfaction':
        return (
          <SatisfactionScale
            value={answer || 0}
            onChange={(value) => updateAnswer(currentQ.id, value)}
          />
        );
      case 'radio':
        return (
          <RadioGroup
            options={currentQ.options}
            value={answer || ''}
            onChange={(value) => updateAnswer(currentQ.id, value)}
          />
        );
      case 'textarea':
        return (
          <TextArea
            value={answer || ''}
            onChange={(value) => updateAnswer(currentQ.id, value)}
            placeholder={currentQ.placeholder}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50/80 via-white/90 to-green-100/60">
      <div className={`w-full max-w-2xl mx-auto transition-all duration-300 ease-in-out ${
        isTransitioning 
          ? slideDirection === 'next' 
            ? 'transform translate-x-full opacity-0' 
            : 'transform -translate-x-full opacity-0'
          : 'transform translate-x-0 opacity-100'
      }`}>
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-green-600 mb-2">
            <span>Question {currentQuestion + 1}</span>
            <span>{currentQuestion + 1} sur {questions.length}</span>
          </div>
          <div className="w-full bg-green-100/50 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed text-center">
          {currentQ.question}
        </h2>

        {/* Answer Component */}
        <div className="mb-8">
          {renderQuestionComponent()}
        </div>

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
              disabled={!canGoNext() && currentQ.required}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            >
              {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
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
  );
};

export default Survey;
