import { centerPreferItemType } from '@/shared/types/center-profile/centerProfile';
import { ProfilePreferItemBoxCss } from './indexCss';

const ProfilePreferItemBox = ({ preferItems }: { preferItems: centerPreferItemType[] }) => {
  console.log('이거확인좀', preferItems);
  return (
    <ProfilePreferItemBoxCss>
      <p className="blueTitle">필요한 지원물품</p>
      <div className="preferItemWrap">
        {preferItems.map((v, i) => (
          <div key={i} className="preferItem">
            {v.itemName}
          </div>
        ))}
      </div>
    </ProfilePreferItemBoxCss>
  );
};
export default ProfilePreferItemBox;
