import { Link } from 'react-router-dom';
import { WriterProfileBoxCss } from './WriterProfileBoxCss';
import { tierType } from '@/shared/types/person-profile/personProfile';
import { ApplyButton } from '../indexCss';

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
          <ApplyButton label="프로필 확인하기" type="blue" />
        </Link>
      ) : (
        <ApplyButton label="프로필 확인하기" type="blue" disabled={true} />
      )}
    </WriterProfileBoxCss>
  );
};
export default WriterProfileBox;
