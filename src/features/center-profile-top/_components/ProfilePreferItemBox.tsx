import { centerPreferItemType } from '@/shared/types/center-profile/centerProfile';
import { ProfilePreferItemBoxCss } from './ProfilePreferItemBoxCss';

const ProfilePreferItemBox = () => {
  const tmpdata: centerPreferItemType[] = [
    { prefer_item_id: 1, item_name: '어린이 도서' },
    { prefer_item_id: 2, item_name: '복숭아' },
    { prefer_item_id: 3, item_name: '간식' }
  ];

  return (
    <ProfilePreferItemBoxCss>
      <p className="blueTitle">필요한 지원물품</p>
      <div className="preferItemWrap">
        {tmpdata.map((v) => (
          <div className="preferItem">{v.item_name}</div>
        ))}
      </div>
    </ProfilePreferItemBoxCss>
  );
};
export default ProfilePreferItemBox;
