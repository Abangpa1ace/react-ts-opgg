import React from 'react';
import useInput from '@/hooks/useInput';

type Props = {
  updateValue: (text: string) => void;
  initValue?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  onFocus?: () => void;
  useFocusInit?: boolean; 
  onBlur?: () => void;
};

const TextInput: React.FC<Props> = ({ className, placeholder, disabled = false, initValue, updateValue, onFocus, useFocusInit, onBlur }) => {
  const { value, setValue, onChange } = useInput({ initValue });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(e);
    updateValue(e.target.value);
  };

  const handleFocus = () => {
    if (useFocusInit) setValue('');
    if (!!onFocus) onFocus()
  }

  return (
    <div className={`${className} ${disabled ? 'disabled' : ''}`}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextInput;