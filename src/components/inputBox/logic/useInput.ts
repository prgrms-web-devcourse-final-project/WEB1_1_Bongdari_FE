import { useState } from 'react';

interface UseInputProps {
  initialVal?: string;
}

interface UseInputReturn {
  inputText: string | undefined;
  setInputText: (value: string) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const useInput = ({ initialVal }: UseInputProps = {}): UseInputReturn => {
  const [inputText, setInputText] = useState(initialVal ?? '');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    // console.log(inputText);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // TODO: 엔터키 누르면 value 전달하기. => 어디로?
      const tmp = (e.target as HTMLInputElement).value;
      console.log(tmp, '가 검색되었습니다');
    }
  };

  return {
    inputText,
    setInputText,
    onChangeInput,
    onEnter
  };
};
