
import React from 'react';
import { Input } from '@/components/ui/input';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="text-lg p-4 border-green-200 focus:border-green-500 focus:ring-green-500/20"
    />
  );
};

export default TextInput;
