import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';

import { MailButton, Wrapper, ProfileBtn } from './indexCss';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';

interface ButtonContainerProps {
  centerProfile: centerProfileType;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ centerProfile, setIsModalOpen }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ProfileBtn
        onClick={() => {
          navigate(`/centerprofile/${centerProfile.center_id}`);
        }}
        label="프로필 보러가기"
        type="blue"
        disabled={false}></ProfileBtn>
      <MailButton
        onClick={() => {
          setIsModalOpen(true);
        }}
        label="쪽지 전달하기"
        type="white"
        disabled={false}></MailButton>
    </Wrapper>
  );
};

export default ButtonContainer;
