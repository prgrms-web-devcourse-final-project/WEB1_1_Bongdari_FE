import { ApplyButton, ProfileImgBoxCss } from './indexCss';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import { useLoginStore } from '@/store/stores/login/loginStore';
import InterestHeartBtn from '@/components/interest-heart';

type personOrCenter = ({ type: 'person' } & personProfileType) | ({ type: 'center' } & centerProfileType);

type ProfileImgBoxProps = {
  setIsModalOpen: (bool: boolean) => void;
} & personOrCenter;

const ProfileImgBox: React.FC<ProfileImgBoxProps> = (props) => {
  const { setIsModalOpen } = props;
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const loginType = useLoginStore((state) => state.loginType);
  console.log('isloggedin', isLoggedIn);

  // 타입 가드 함수 생성
  const isPersonProfile = (props: personOrCenter): props is { type: 'person' } & personProfileType => {
    return props.type === 'person';
  };

  // 조건부 렌더링 및 타입 좁히기
  if (isPersonProfile(props)) {
    const { volunteer_id, nickname, img_url, tier } = props;

    return (
      <ProfileImgBoxCss id={volunteer_id}>
        <img src={img_url || '/assets/imgs/no-img-person.svg'} />
        <p>
          <i>{nickname}</i>
          <img className="mitten" src={`/assets/imgs/mitten-${tier.toLowerCase()}.svg`} />
        </p>
        {/* 봉사자는 봉사자에게 쪽지 보낼 수 없음 */}
        <ApplyButton
          label="쪽지 전달하기"
          type="blue"
          disabled={!isLoggedIn || loginType !== 'ROLE_CENTER'}
          onClick={() => setIsModalOpen(true)}
        />
      </ProfileImgBoxCss>
    );
  } else {
    const { id, name, homepage_url, img_url } = props;

    return (
      <ProfileImgBoxCss id={id}>
        <InterestHeartBtn center_id={id} top={'15px'} right={'15px'} />
        <img src={img_url || '/assets/imgs/no-img-center.svg'} />
        <p>
          <i>{name}</i>
          <i>{homepage_url}</i>
        </p>
        {/* 센터는 센터에게 쪽지 보낼 수 없음 */}
        <ApplyButton
          label="쪽지 전달하기"
          type="blue"
          disabled={!isLoggedIn || loginType !== 'ROLE_VOLUNTEER'}
          onClick={() => setIsModalOpen(true)}
        />
      </ProfileImgBoxCss>
    );
  }
};
export default ProfileImgBox;
