
import React from 'react';

interface SatisfactionScaleProps {
  value: number;
  onChange: (value: number) => void;
}

const SatisfactionScale: React.FC<SatisfactionScaleProps> = ({ value, onChange }) => {
  const emojis = ['😡', '😞', '😐', '😊', '😍'];
  const labels = ['Très mécontent', 'Mécontent', 'Neutre', 'Satisfait', 'Très satisfait'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => onChange(index + 1)}
            className={`p-4 rounded-full transition-all transform hover:scale-110 ${
              value === index + 1 
                ? 'bg-green-500 shadow-lg scale-110' 
                : 'bg-green-100 hover:bg-green-200'
            }`}
          >
            <span className="text-4xl">{emoji}</span>
          </button>
        ))}
      </div>
      <div className="text-center">
        {value > 0 && (
          <p className="text-lg font-medium text-green-700">
            {labels[value - 1]}
          </p>
        )}
      </div>
    </div>
  );
};

export default SatisfactionScale;
