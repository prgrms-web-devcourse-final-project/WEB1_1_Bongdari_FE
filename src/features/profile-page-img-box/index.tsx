import { SubmitButton } from '@/components/button';
import { ProfileImgBoxCss } from './indexCss';
import { handleClickMail } from './logic/handleClickMail';

interface ProfileImgBoxProps {
  user_id: string;
  profileName: string;
  profileMitten: string;
  profileImg?: string;
}

const ProfileImgBox: React.FC<ProfileImgBoxProps> = ({ user_id, profileImg, profileName, profileMitten }) => {
  return (
    <ProfileImgBoxCss id={user_id}>
      <img src={profileImg} alt="" />
      <p>
        <i>{profileName}</i>
        <img className="mitten" src={`/assets/imgs/mitten-${profileMitten}.svg`} />
      </p>
      <SubmitButton label="쪽지 전달하기" onClick={() => handleClickMail(user_id)} />
    </ProfileImgBoxCss>
  );
};
export default ProfileImgBox;
