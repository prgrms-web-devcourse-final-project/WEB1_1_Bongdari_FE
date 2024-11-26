import { OtherButton } from '@/components/button';
import { MailButton, Wrapper } from './indexCss';
import theme from '@/styles/theme';
import { aidRqCenterProfileType } from '@/shared/types/aidrq-detail-center/aidRqCenterProfileType';

interface ButtonContainerProps {
  centerProfile: aidRqCenterProfileType;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ centerProfile }) => {
  return (
    <Wrapper>
      <OtherButton
        onClick={() => {
          console.log(centerProfile.id);
        }}
        label="프로필 보러가기"
        width="220px"
        border={`1px solid ${theme.pointColor.Regular}`}
        borderRadius="8px"
        bgColor={theme.pointColor.Regular}
        color="white"
        fontSize="14px"
        fontWeight="400"
        disabled={false}></OtherButton>
      <MailButton
        onClick={() => {
          console.log(centerProfile.id);
        }}>
        쪽지 전달하기
      </MailButton>
    </Wrapper>
  );
};

export default ButtonContainer;
