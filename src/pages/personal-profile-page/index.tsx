import { Wrapper } from './indexCss';
import { usePersonProfile } from './logic/usePersonProfile';
import ProfileImgBox from '@/features/profile-page-img-box';
import ProfileInfoBox from '@/features/profile-page-info-box';
import MessageCreateModal from '@/features/message-create-modal';

const PersonalProfilePage = () => {
  const { userId, profileData, isModalOpen, setIsModalOpenWhenLogin } = usePersonProfile();

  if (!profileData) {
    // 해당 profile이 없을 경우
    return <Wrapper>No Profile Found</Wrapper>;
  } else {
    return (
      <Wrapper>
        <div className="innerWrap">
          <ProfileImgBox type="person" {...profileData} setIsModalOpen={setIsModalOpenWhenLogin} />
          <ProfileInfoBox type="person" {...profileData} />
          <MessageCreateModal
            user_id={userId || ''}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpenWhenLogin}
          />
        </div>
      </Wrapper>
    );
  }
};
export default PersonalProfilePage;
