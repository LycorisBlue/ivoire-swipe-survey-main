
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, placeholder }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="text-lg p-4 border-green-200 focus:border-green-500 focus:ring-green-500/20">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white/95 backdrop-blur-sm border-green-200">
        {options.map((option, index) => (
          <SelectItem key={index} value={option} className="hover:bg-green-50">
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
