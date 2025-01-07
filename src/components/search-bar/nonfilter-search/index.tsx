import { InputBoxContainer, Wrapper, SearchBtn } from './indexCss';
import InputBox from '@/components/inputBox';
import { useState } from 'react';

interface NonFilterSearchBar {
  getInput?: (text: string) => void;
}

const NonFilterSearchBar: React.FC<NonFilterSearchBar> = ({ getInput }) => {
  const [word, setWord] = useState<string>('');
  const onClickGetInput = () => {
    if (getInput) getInput(word);
  };

  const testFunc = () => {
    console.log('test');
  };

  return (
    <Wrapper>
      <InputBoxContainer>
        <InputBox
          getInputText={getInput ?? testFunc}
          colortype="white"
          placeholder="검색어를 입력해주세요."
          setFunc={setWord}
        />
      </InputBoxContainer>
      <SearchBtn label="검색하기" disabled={false} onClick={onClickGetInput} />
    </Wrapper>
  );
};
export default NonFilterSearchBar;
