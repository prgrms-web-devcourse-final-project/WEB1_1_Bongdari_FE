import { Link } from 'react-router-dom';
import { WriterProfileBoxCss } from './WriterProfileBoxCss';
import { tierType } from '@/shared/types/person-profile/personProfile';
import Button from '@/components/button';

const WriterProfileBox = ({
  volunteer_id,
  nickname,
  img_url,
  tier
}: {
  volunteer_id?: string;
  nickname?: string;
  img_url?: string;
  tier?: tierType;
}) => {
  return (
    <WriterProfileBoxCss>
      <div className="infoWrap">
        <img className="profileImg" src={img_url || '/assets/imgs/no-img-person.svg'} />
        <i className="nickname">{nickname ?? '정보 없음'}</i>
        {tier ? <img className="tier" src={`/assets/imgs/mitten-${tier.toLowerCase()}.svg`} /> : ''}
      </div>
      {volunteer_id ? (
        <Link to={`/profile/${volunteer_id}`}>
          {/* <SubmitButton label="프로필 확인하기" variant="enabledOne" /> 이걸 아래로 바꿔놨어요 밑에꺼 수정하면 이건 지우시면 됩니다. */}
          <Button label="프로필 확인하기" />
        </Link>
      ) : (
        // <SubmitButton label="프로필 확인하기" variant="disabled" /> 이걸 아래로 바꿔놨어요 밑에꺼 수정하면 이건 지우시면 됩니다.
        <Button label="프로필 확인하기" />
      )}
    </WriterProfileBoxCss>
  );
};
export default WriterProfileBox;
