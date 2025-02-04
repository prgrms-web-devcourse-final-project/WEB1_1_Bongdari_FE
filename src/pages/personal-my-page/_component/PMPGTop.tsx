import { PMPGTopCss } from './PMPGTopCss';
import { useMyProfileData } from './logic/useMyProfileData';
import EditProfile from '@/features/personal-my-page-edit-profile';
import { VolunteerInfo } from '@/store/queries/volunteer-mypage/usePutMyProfile';

const PMPGTop = () => {
  const { profileData } = useMyProfileData();

  if (!profileData) {
    return (
      <PMPGTopCss>
        <div className="noData">No Profile Found</div>
      </PMPGTopCss>
    );
  }

  const currentUserInfo: VolunteerInfo = {
    common_basic_info: {
      name: profileData.detail?.name ?? '',
      contact_number: profileData.detail?.contact_number ?? '',
      img_url: profileData.img_url ?? '',
      introduce: profileData.introduce ?? ''
    },
    nickname: profileData.nickname ?? '',
    gender: profileData.detail?.gender ?? 'MALE'
  };

  return (
    <PMPGTopCss>
      <i className="sayHi">안녕하세요, {profileData.detail?.name ?? ''}님!</i>
      <EditProfile profileImg={currentUserInfo.common_basic_info.img_url} currentUserInfo={currentUserInfo} />
    </PMPGTopCss>
  );
};

export default PMPGTop;
