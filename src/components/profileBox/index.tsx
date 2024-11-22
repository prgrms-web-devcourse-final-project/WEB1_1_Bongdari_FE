import { SubmitButton } from '@/components/button';
import { ProfileBoxCss } from './indexCss';
import { handleClickMail } from './logic/handleClickMail';

interface ProfileBoxProps {
  user_id: string;
  profileName: string;
  profileMitten: string;
  profileImg?: string;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ user_id, profileImg, profileName, profileMitten }) => {
  return (
    <ProfileBoxCss id={user_id}>
      <img src={profileImg} alt="" />
      <p>
        <i>{profileName}</i>
        <i>{profileMitten}</i>
      </p>
      <SubmitButton label="쪽지 전달하기" onClick={() => handleClickMail(user_id)} />
    </ProfileBoxCss>
  );
};
export default ProfileBox;
