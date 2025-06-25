
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface SurveyCardProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
  children: React.ReactNode;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  isFirst: boolean;
  isLast: boolean;
}

const SurveyCard: React.FC<SurveyCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  children,
  onNext,
  onPrevious,
  canGoNext,
  isFirst,
  isLast
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50/80 via-white/90 to-green-100/60">
      <Card className="w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-sm border-green-200/50 shadow-xl">
        <div className="p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-green-600 mb-2">
              <span>Question {questionNumber}</span>
              <span>{questionNumber} sur {totalQuestions}</span>
            </div>
            <div className="w-full bg-green-100/50 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
            {question}
          </h2>

          {/* Answer Component */}
          <div className="mb-8">
            {children}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={onPrevious}
              disabled={isFirst}
              variant="outline"
              className="border-green-200 text-green-700 hover:bg-green-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Précédent
            </Button>

            <Button
              onClick={onNext}
              disabled={!canGoNext}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            >
              {isLast ? 'Terminer' : 'Suivant'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SurveyCard;
