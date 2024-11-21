import React, { useState } from 'react';

interface UseInputProps {
  getInputText: (inputText: string) => void;
  initialVal: string;
}

interface UseInputReturn {
  inputText: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void; // 검색시 상위전달
  onBlur: () => void; // 다른곳 클릭시 상위전달
}

export const useInput = ({ getInputText, initialVal }: UseInputProps): UseInputReturn => {
  const [inputText, setInputText] = useState(initialVal);

  // inputText 내부적으로 저장
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // Enter 누르면 inputText 상위로 전달
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const tmp = (e.target as HTMLInputElement).value;
      console.log('"', tmp, '" Enter가 눌렸습니다');
      getInputText(tmp);
    }
  };

  // input 내부 외 다른 곳 클릭시 inputText 상위로 전달
  const onBlur = () => {
    getInputText(inputText);
  };

  return {
    inputText,
    onChangeInput,
    onEnter,
    onBlur
  };
};
