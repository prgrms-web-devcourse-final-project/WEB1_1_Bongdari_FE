import { Link } from 'react-router-dom';
import { WriterProfileBoxCss } from './WriterProfileBoxCss';
import { SubmitButton } from '@/components/button';
import { tierType } from '@/shared/types/person-profile/personProfile';

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
        {tier ? <img className="tier" src={`/assets/imgs/mitten-${tier}.svg`} /> : ''}
      </div>
      {volunteer_id ? (
        <Link to={`/profile/${volunteer_id}`}>
          <SubmitButton label="프로필 확인하기" variant="enabledOne" />
        </Link>
      ) : (
        <SubmitButton label="프로필 확인하기" variant="disabled" />
      )}
    </WriterProfileBoxCss>
  );
};
export default WriterProfileBox;
