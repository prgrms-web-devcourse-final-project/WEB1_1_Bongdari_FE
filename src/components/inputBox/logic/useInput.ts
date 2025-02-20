import React, { useState } from 'react';

interface UseInputProps {
  getInputText?: (inputText: string) => void;
  initialVal: string;
  setFunc?: (inputText: string) => void;
  onEnterFunc?: () => void;
}

interface UseInputReturn {
  inputText: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void; // 검색시 상위전달
  onBlur: () => void; // 다른곳 클릭시 상위전달
}

export const useInput = ({ getInputText, initialVal, setFunc, onEnterFunc }: UseInputProps): UseInputReturn => {
  const [inputText, setInputText] = useState(initialVal);

  // inputText 내부적 & 외부적으로 저장
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value); // 내부 저장
    if (setFunc) setFunc(e.target.value); // 외부 저장
  };

  // Enter 누르면 inputText 상위로 전달
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const tmp = (e.target as HTMLInputElement).value;
      if (getInputText) getInputText(tmp);
      if (onEnterFunc) onEnterFunc();
    }
  };

  // input 내부 외 다른 곳 클릭시 inputText 상위로 전달
  const onBlur = () => {
    if (getInputText) getInputText(inputText);
  };

  return {
    inputText,
    onChangeInput,
    onEnter,
    onBlur
  };
};
