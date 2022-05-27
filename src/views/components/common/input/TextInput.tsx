import React from 'react';
import useInput from '@/hooks/useInput';

type Props = {
  updateValue: (text: string) => void;
  initValue?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
};

const TextInput: React.FC<Props> = ({ className, placeholder, disabled = false, initValue, updateValue, onFocus, onBlur }) => {
  const { value, onChange } = useInput({ initValue });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(e);
    updateValue(e.target.value);
  };

  return (
    <div className={`${className} ${disabled ? 'disabled' : ''}`}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextInput;