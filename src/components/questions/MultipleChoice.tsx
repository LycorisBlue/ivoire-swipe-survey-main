import React from 'react';

interface MultipleChoiceProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ options, selectedOptions, onChange }) => {
  const handleOptionChange = (option: string) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      onChange(selectedOptions.filter(item => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  const useGridLayout = options.length > 3;

  return (
    <div className={useGridLayout ? 'grid grid-cols-2 gap-3' : 'flex flex-col gap-3'}>
      {options.map((option, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedOptions.includes(option)
              ? 'border-green-500 bg-green-50/50'
              : 'border-green-200 hover:border-green-300 hover:bg-green-50/30'
            }`}
          onClick={() => handleOptionChange(option)}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${selectedOptions.includes(option) ? 'border-green-500 bg-green-500' : 'border-gray-300'
              }`}>
              {selectedOptions.includes(option) && (
                <div className="w-2 h-2 bg-white rounded-full" />
              )}
            </div>
            <span className={`${useGridLayout ? 'text-base' : 'text-lg'} leading-tight`}>{option}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;