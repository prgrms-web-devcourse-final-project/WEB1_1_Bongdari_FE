import { SubmitButton } from '@/components/button';
import { ProfileImgBoxCss } from './indexCss';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import { useLoginStore } from '@/store/stores/login/loginStore';

type personOrCenter = ({ type: 'person' } & personProfileType) | ({ type: 'center' } & centerProfileType);

type ProfileImgBoxProps = {
  setIsModalOpen: (bool: boolean) => void;
} & personOrCenter;

const ProfileImgBox: React.FC<ProfileImgBoxProps> = (props) => {
  const { setIsModalOpen } = props;
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  // 타입 가드 함수 생성
  const isPersonProfile = (props: personOrCenter): props is { type: 'person' } & personProfileType => {
    return props.type === 'person';
  };

  // 조건부 렌더링 및 타입 좁히기
  if (isPersonProfile(props)) {
    const { volunteer_id, nickname, img_url, tier } = props;

    return (
      <ProfileImgBoxCss id={volunteer_id}>
        <img src={img_url} alt="" />
        <p>
          <i>{nickname}</i>
          <img className="mitten" src={`/assets/imgs/mitten-${tier}.svg`} />
        </p>
        <SubmitButton
          label="쪽지 전달하기"
          onClick={() => setIsModalOpen(true)}
          variant={isLoggedIn ? 'enabledOne' : 'disabled'}
        />
      </ProfileImgBoxCss>
    );
  } else {
    const { center_id, name, homepage_link, img_url, interest } = props;
    console.log(center_id, interest);

    return (
      <ProfileImgBoxCss id={center_id}>
        <img src={img_url} alt="" />
        <p>
          <i>{name}</i>
          <i>{homepage_link}</i>
        </p>
        <SubmitButton
          label="쪽지 전달하기"
          onClick={() => setIsModalOpen(true)}
          variant={isLoggedIn ? 'enabledOne' : 'disabled'}
        />
      </ProfileImgBoxCss>
    );
  }
};
export default ProfileImgBox;
