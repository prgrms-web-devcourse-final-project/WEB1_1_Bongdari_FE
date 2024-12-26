import { InputBoxContainer, Wrapper, SearchBtn } from './indexCss';
import InputBox from '@/components/inputBox';
import { useState } from 'react';

interface NonFilterSearchBar {
  type: boolean;
  getInput?: (text: string) => void;
}

const NonFilterSearchBar: React.FC<NonFilterSearchBar> = ({ type, getInput }) => {
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
          width="100%"
          height={type ? '57px' : '47px'}
          borderRadius="8px"
          colortype={0}
          placeholder="검색어를 입력해주세요."
          setFunc={setWord}
        />
      </InputBoxContainer>
      <SearchBtn label="검색하기" disabled={false} onClick={onClickGetInput} />
    </Wrapper>
  );
};
export default NonFilterSearchBar;
