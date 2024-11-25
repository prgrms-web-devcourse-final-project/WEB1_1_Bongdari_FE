import InputBox from '@/components/inputBox';
import { InputBoxContainer, Wrapper } from './indexCss';
import { OtherButton } from '@/components/button';
import testFunc from './logic/testFunc';
import theme from '@/styles/theme';

interface NonFilterSearchBar {
  type: boolean;
}

const NonFilterSearchBar: React.FC<NonFilterSearchBar> = ({ type }) => {
  return (
    <Wrapper>
      <InputBoxContainer>
        <InputBox
          getInputText={testFunc}
          width="100%"
          height={type ? '57px' : '47px'}
          borderradius="8px"
          colortype={0}
          placeholder="검색어를 입력해주세요."></InputBox>
      </InputBoxContainer>
      <OtherButton
        label="검색하기"
        width={type ? '188px' : '100px'}
        border={`1px solid ${theme.pointColor.Regular}`}
        borderRadius="8px"
        bgColor={theme.pointColor.Regular}
        color="white"
        fontSize="14px"
        fontWeight="700"
        disabled={false}></OtherButton>
    </Wrapper>
  );
};
export default NonFilterSearchBar;
