
import React from 'react';
import { Checkbox as CheckboxUI } from '@/components/ui/checkbox';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <div className="flex items-center space-x-3 p-4 rounded-lg border border-green-200 hover:bg-green-50/50 transition-colors">
      <CheckboxUI
        checked={checked}
        onCheckedChange={onChange}
        className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
      />
      <label className="text-lg cursor-pointer flex-1">{label}</label>
    </div>
  );
};

export default Checkbox;
