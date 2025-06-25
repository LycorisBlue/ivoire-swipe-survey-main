
import React from 'react';
import { Input } from '@/components/ui/input';

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, placeholder, min, max }) => {
  return (
    <Input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      max={max}
      className="text-lg p-4 border-green-200 focus:border-green-500 focus:ring-green-500/20"
    />
  );
};

export default NumberInput;
