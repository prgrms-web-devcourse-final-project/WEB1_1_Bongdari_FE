import { Link } from 'react-router-dom';

import { Bottom, Users, DisplayUser, RemainingUsers, Top, Wrapper, GloveImg } from './indexCss';
import { RankingDataType } from '@/shared/types/ranking-data/RankingDataType';

interface RankItemProps {
  item: RankingDataType;
  index: number;
}

const RankItem: React.FC<RankItemProps> = ({ item, index }) => {
  return (
    <Wrapper>
      <Top>
        <div>
          {index === 0 ? (
            <img src="/assets/imgs/rank-gold.svg"></img>
          ) : index === 1 ? (
            <img src="/assets/imgs/rank-silver.svg"></img>
          ) : index === 2 ? (
            <img src="/assets/imgs/rank-bronze.svg"></img>
          ) : (
            <img src="/assets/imgs/rank-blue.svg"></img>
          )}
        </div>
        <span>{index + 1}위</span>
        <Users>
          <DisplayUser>
            <Link to={`/profile/${item.volunteer_id}`}>
              <span>{item.nickname}</span>
              <GloveImg src={`/assets/imgs/mitten-${item.tier.toLowerCase()}.svg`} alt="" />
            </Link>
          </DisplayUser>
          <RemainingUsers>
            <div className="remainingUsersWrap">
              <Link to={`/profile/${item.volunteer_id}`}>
                <span>영등포 헬렌 켈러</span>
                <GloveImg src={`/assets/imgs/mitten-${item.tier.toLowerCase()}.svg`} alt="" />
              </Link>
              <Link to={`/profile/${item.volunteer_id}`}>
                <span>춘천 마더테레사</span>
                <GloveImg src={`/assets/imgs/mitten-${item.tier.toLowerCase()}.svg`} alt="" />
              </Link>
              <Link to={`/profile/${item.volunteer_id}`}>
                <span>보람이 귀여워</span>
                <GloveImg src={`/assets/imgs/mitten-${item.tier.toLowerCase()}.svg`} alt="" />
              </Link>
              <Link to={`/profile/${item.volunteer_id}`}>
                <span>봉사조아</span>
                <GloveImg src={`/assets/imgs/mitten-${item.tier.toLowerCase()}.svg`} alt="" />
              </Link>
            </div>
          </RemainingUsers>
        </Users>
      </Top>
      <Bottom>
        <p>{item.total_volunteer_hours}시간</p>
      </Bottom>
    </Wrapper>
  );
};

export default RankItem;
