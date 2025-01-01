import React, { useState } from 'react';

interface UseInputProps {
  getInputText?: (inputText: string) => void;
  initialVal: string;
  setFunc?: (inputText: string) => void;
}

interface UseInputReturn {
  inputText: string;
  onChangeInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: () => void; // 다른곳 클릭시 상위전달
}

export const useInput = ({ getInputText, initialVal, setFunc }: UseInputProps): UseInputReturn => {
  const [inputText, setInputText] = useState(initialVal);

  // inputText 내부적으로 저장
  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    if (setFunc) setFunc(e.target.value);
  };

  // input 내부 외 다른 곳 클릭시 inputText 상위로 전달
  const onBlur = () => {
    if (getInputText) getInputText(inputText);
  };

  return {
    inputText,
    onChangeInput,
    onBlur
  };
};
