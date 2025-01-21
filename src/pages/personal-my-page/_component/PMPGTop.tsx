import { PMPGTopCss } from './PMPGTopCss';
import { useMyProfileData } from './logic/useMyProfileData';
import EditProfile from '@/features/personal-my-page-edit-profile';

const PMPGTop = () => {
  const { profileData } = useMyProfileData();
  // const profileData = { detail: { name: '주영' }, img_url: '', nickname: 'ww', introduce: '하이하이' };

  if (!profileData) {
    // 로그인한 profile이 없을 경우
    return (
      <PMPGTopCss>
        <div className="noData">No Profile Found</div>
      </PMPGTopCss>
    );
  } else {
    return (
      <PMPGTopCss>
        <i className="sayHi">안녕하세요, {profileData.detail?.name}님!</i>
        <EditProfile
          profileImg={profileData.img_url}
          profileNickname={profileData.nickname}
          profileDescription={profileData.introduce}
        />
      </PMPGTopCss>
    );
  }
};
export default PMPGTop;
