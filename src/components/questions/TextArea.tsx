
import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder }) => {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="min-h-32 text-lg p-4 border-green-200 focus:border-green-500 focus:ring-green-500/20 resize-none"
    />
  );
};

export default TextArea;
