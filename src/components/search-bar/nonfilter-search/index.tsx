import { InputBoxContainer, Wrapper } from './indexCss';
import InputBox from '@/components/inputBox';
import { useState } from 'react';
import Button from '@/components/button';

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
      <Button
        label="검색하기"
        // width={type ? '188px' : '100px'}
        // border={`1px solid ${theme.pointColor.Regular}`}
        // borderRadius="8px"
        // bgColor={theme.pointColor.Regular}
        // color="white"
        // fontSize="14px"
        // fontWeight="700"
        disabled={false}
        onClick={onClickGetInput}
      />
    </Wrapper>
  );
};
export default NonFilterSearchBar;
