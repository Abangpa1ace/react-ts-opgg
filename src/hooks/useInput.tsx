import { useState, useRef, useCallback } from 'react';

interface Options {
  initValue?: string;
  validate?: string[];
}

interface returnType {
  value: string;
  setValue: (value: string) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isValid: { valid: boolean };
}

const useInput = (options?: Options): returnType => {
  const [value, setValue] = useState<string>(options?.initValue || '');
  const isValid = useRef<{ valid: boolean }>({
    valid: false,
  });

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  }, []);

  return { value, setValue, onChange, isValid: isValid.current };
};

export default useInput;