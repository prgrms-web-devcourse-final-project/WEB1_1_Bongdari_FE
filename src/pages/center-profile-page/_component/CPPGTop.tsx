import { CPPGTopCss } from './CPPGTopCss';
import ProfileImgBox from '@/features/profile-page-img-box';
import ProfileInfoBox from '@/features/profile-page-info-box';
import ProfilePreferItemBox from '@/features/center-profile-prefer-item-box';
import { useCenterProfile } from './logic/useCenterProfile';

interface CPPGTopProps {
  setIsModalOpen: (bool: boolean) => void;
}

const CPPGTop = ({ setIsModalOpen }: CPPGTopProps) => {
  const { profileData } = useCenterProfile();

  if (!profileData) {
    // 해당 profile이 없을 경우
    return (
      <CPPGTopCss>
        <div className="noData">No Profile Found</div>
      </CPPGTopCss>
    );
  } else {
    return (
      <CPPGTopCss>
        <ProfileImgBox type="center" {...profileData} setIsModalOpen={setIsModalOpen} />
        <div className="rightWrap">
          <ProfileInfoBox type="center" {...profileData} />
          <ProfilePreferItemBox preferItems={profileData.prefer_item ?? []} />
        </div>
      </CPPGTopCss>
    );
  }
};
export default CPPGTop;
