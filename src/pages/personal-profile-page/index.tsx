import { Wrapper } from './indexCss';
import { usePersonProfile } from './logic/usePersonProfile';
import ProfileImgBox from '@/features/profile-page-img-box';
import ProfileInfoBox from '@/features/profile-page-info-box';
import MessageCreateModal from '@/features/message-create-modal';

const PersonalProfilePage = () => {
  const { userId, profileData, isModalOpen, setIsModalOpenWhenLogin } = usePersonProfile();

  if (!profileData) {
    // 해당 profile이 없을 경우
    return (
      <Wrapper>
        <div className="noData">해당 봉사자 정보를 찾을 수 없습니다.</div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <ProfileImgBox type="person" {...profileData} setIsModalOpen={setIsModalOpenWhenLogin} />
        <ProfileInfoBox type="person" {...profileData} />
        <MessageCreateModal user_id={userId || ''} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpenWhenLogin} />
      </Wrapper>
    );
  }
};
export default PersonalProfilePage;
