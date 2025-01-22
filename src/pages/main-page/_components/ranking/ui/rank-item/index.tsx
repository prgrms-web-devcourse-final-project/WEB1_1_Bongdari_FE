import { Link } from 'react-router-dom';
import { Bottom, Users, DisplayUser, RemainingUsers, Top, Wrapper, RankText } from './indexCss';
import { RankingItem } from '@/shared/types/ranking-data/RankingDataType';

interface RankItemProps {
  item: {
    ranking: number;
    participants: RankingItem[];
  };
  index: number;
}

const RankItem = ({ item, index }: RankItemProps) => {
  const { ranking, participants } = item;
  const displayUser = participants[0];
  const remainingUsers = participants.slice(1);

  return (
    <Wrapper>
      <Top>
        <div>
          {index === 0 ? (
            <img src="/assets/imgs/rank-gold.svg" alt="금메달" />
          ) : index === 1 ? (
            <img src="/assets/imgs/rank-silver.svg" alt="은메달" />
          ) : index === 2 ? (
            <img src="/assets/imgs/rank-bronze.svg" alt="동메달" />
          ) : (
            <img src="/assets/imgs/rank-blue.svg" alt="랭킹" />
          )}
        </div>
        <RankText>{ranking}위</RankText>
        <Users>
          <DisplayUser>
            <Link to={`/profile/${displayUser.volunteerId}`}>
              <span>{displayUser.nickname}</span>
            </Link>
            {remainingUsers.length > 0 && <p>외 {remainingUsers.length}명</p>}
          </DisplayUser>
          {remainingUsers.length > 0 && (
            <RemainingUsers>
              <div className="remainingUsersWrap">
                {remainingUsers.map((user) => (
                  <Link key={user.volunteerId} to={`/profile/${user.volunteerId}`}>
                    <span>{user.nickname}</span>
                  </Link>
                ))}
              </div>
            </RemainingUsers>
          )}
        </Users>
      </Top>
      <Bottom>
        <p>{displayUser.totalHours}시간</p>
      </Bottom>
    </Wrapper>
  );
};

export default RankItem;
