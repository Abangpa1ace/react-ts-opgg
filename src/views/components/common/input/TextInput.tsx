import React from 'react';
import useInput from '@/hooks/useInput';

type Props = {
  initValue?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  updateValue: (text: string) => void;
};

const TextInput: React.FC<Props> = ({ className, placeholder, disabled = false, initValue, updateValue }) => {
  const { value, onChange } = useInput({ initValue });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(e);
    updateValue(value);
  };

  return (
    <div className={`${className} ${disabled ? 'disabled' : ''}`}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;