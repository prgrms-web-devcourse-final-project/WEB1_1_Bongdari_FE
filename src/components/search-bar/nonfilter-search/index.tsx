import { InputBoxContainer, Wrapper, SearchBtn } from './indexCss';
import InputBox from '@/components/inputBox';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

interface NonFilterSearchBar {
  getInput?: (text: string) => void;
}

const NonFilterSearchBar: React.FC<NonFilterSearchBar> = ({ getInput }) => {
  const [word, setWord] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickGetInput = () => {
    if (getInput) getInput(word);
  };

  const setQueryString = () => {
    const currentParams = new URLSearchParams(searchParams); // 기존 쿼리 스트링 복사

    if (word.trim()) {
      // 검색어가 있는 경우 search와 page를 업데이트
      currentParams.set('search', word.trim());
      currentParams.set('page', '1');
    } else {
      // 검색어가 없는 경우 search를 삭제하고 page를 1로 설정
      currentParams.delete('search');
      currentParams.set('page', '1');
    }

    setSearchParams(currentParams); // 업데이트된 쿼리 스트링 반영
  };

  return (
    <Wrapper>
      <InputBoxContainer>
        <InputBox
          getInputText={getInput ?? setQueryString}
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
