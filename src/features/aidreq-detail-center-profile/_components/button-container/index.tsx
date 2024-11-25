import { OtherButton } from '@/components/button';
import { Wrapper } from './indexCss';
import theme from '@/styles/theme';

const ButtonContainer = () => {
  return (
    <Wrapper>
      <OtherButton
        label="프로필보기"
        width="220px"
        border={`1px solid ${theme.pointColor.Regular}`}
        borderRadius="8px"
        bgColor={theme.pointColor.Regular}
        color="white"
        fontSize="14px"
        fontWeight="400"
        disabled={false}></OtherButton>
      <OtherButton
        label="쪽지보내기"
        width="220px"
        border="1px solid #DCDCDC"
        borderRadius="8px"
        bgColor="white"
        color="#A4A4A4"
        fontSize="14px"
        fontWeight="400"
        disabled={false}></OtherButton>
    </Wrapper>
  );
};

export default ButtonContainer;
