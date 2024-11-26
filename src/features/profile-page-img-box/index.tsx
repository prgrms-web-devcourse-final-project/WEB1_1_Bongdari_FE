import { SubmitButton } from '@/components/button';
import { ProfileImgBoxCss } from './indexCss';
import { handleClickMail } from './logic/handleClickMail';
import { personProfileType } from '@/shared/types/person-profile/personProfile';

interface ProfileImgBoxProps extends personProfileType {
  user_id: string;
}

const ProfileImgBox: React.FC<ProfileImgBoxProps> = ({ user_id, imgUrl, nickname, tier }) => {
  return (
    <ProfileImgBoxCss id={user_id}>
      <img src={imgUrl} alt="" />
      <p>
        <i>{nickname}</i>
        <img className="mitten" src={`/assets/imgs/mitten-${tier}.svg`} />
      </p>
      <SubmitButton label="쪽지 전달하기" onClick={() => handleClickMail(user_id)} />
    </ProfileImgBoxCss>
  );
};
export default ProfileImgBox;
