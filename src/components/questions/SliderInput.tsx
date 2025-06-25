
import React from 'react';
import { Slider } from '@/components/ui/slider';

interface SliderInputProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  label?: string;
}

const SliderInput: React.FC<SliderInputProps> = ({ value, onChange, min, max, step = 1, label }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-600">
        <span>{min}</span>
        <span className="text-lg font-semibold text-green-600">{value}</span>
        <span>{max}</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
      {label && (
        <p className="text-center text-sm text-gray-600 mt-2">{label}</p>
      )}
    </div>
  );
};

export default SliderInput;
