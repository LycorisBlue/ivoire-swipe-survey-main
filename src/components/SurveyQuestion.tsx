/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Question } from './data/surveyQuestions';
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

interface SurveyQuestionProps {
    question: Question;
    answer: any;
    onChange: (value: any) => void;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({ question, answer, onChange }) => {
    const renderQuestionComponent = () => {
        switch (question.component) {
            case 'text':
                return (
                    <TextInput
                        value={answer || ''}
                        onChange={onChange}
                        placeholder={question.placeholder}
                    />
                );
            case 'number':
                return (
                    <NumberInput
                        value={answer || ''}
                        onChange={onChange}
                        placeholder={question.placeholder}
                        min={question.min}
                        max={question.max}
                    />
                );
            case 'checkbox':
                return (
                    <Checkbox
                        checked={answer || false}
                        onChange={onChange}
                        label={question.label || ''}
                    />
                );
            case 'multiple':
                return (
                    <MultipleChoice
                        options={question.options || []}
                        selectedOptions={answer || []}
                        onChange={onChange}
                    />
                );
            case 'dropdown':
                return (
                    <Dropdown
                        options={question.options || []}
                        value={answer || ''}
                        onChange={onChange}
                        placeholder={question.placeholder}
                    />
                );
            case 'slider':
                return (
                    <SliderInput
                        value={answer || question.min || 0}
                        onChange={onChange}
                        min={question.min || 0}
                        max={question.max || 100}
                        step={question.step || 1}
                        label={question.label}
                    />
                );
            case 'date':
                return (
                    <DatePicker
                        value={answer}
                        onChange={onChange}
                        placeholder={question.placeholder}
                    />
                );
            case 'satisfaction':
                return (
                    <SatisfactionScale
                        value={answer || 0}
                        onChange={onChange}
                    />
                );
            case 'radio':
                return (
                    <RadioGroup
                        options={question.options || []}
                        value={answer || ''}
                        onChange={onChange}
                    />
                );
            case 'textarea':
                return (
                    <TextArea
                        value={answer || ''}
                        onChange={onChange}
                        placeholder={question.placeholder}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Question */}
            <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed text-center">
                {question.question}
            </h2>

            {/* Answer Component */}
            <div className="mb-8">
                {renderQuestionComponent()}
            </div>
        </div>
    );
};

export default SurveyQuestion;