import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';

import { MailButton, Wrapper } from './indexCss';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import Button from '@/components/button';

interface ButtonContainerProps {
  centerProfile: centerProfileType;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ centerProfile, setIsModalOpen }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Button
        onClick={() => {
          navigate(`/centerprofile/${centerProfile.center_id}`);
        }}
        label="프로필 보러가기"
        // width="220px"
        // height="47px"
        // border={`1px solid ${theme.pointColor.Regular}`}
        // borderRadius="8px"
        // bgColor={theme.pointColor.Regular}
        // color="white"
        // fontSize="14px"
        // fontWeight="400"
        disabled={false}></Button>
      <MailButton
        onClick={() => {
          setIsModalOpen(true);
        }}>
        쪽지 전달하기
      </MailButton>
    </Wrapper>
  );
};

export default ButtonContainer;
