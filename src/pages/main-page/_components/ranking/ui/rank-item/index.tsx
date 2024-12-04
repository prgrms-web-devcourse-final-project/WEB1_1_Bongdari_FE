import { Bottom, NickName, Top, Wrapper } from './indexCss';
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
            <img src="assets/imgs/rank-gold.svg"></img>
          ) : index === 1 ? (
            <img src="assets/imgs/rank-silver.svg"></img>
          ) : index === 2 ? (
            <img src="assets/imgs/rank-bronze.svg"></img>
          ) : (
            <img src="assets/imgs/rank-blue.svg"></img>
          )}
        </div>
        <NickName>
          <span>{index + 1}위</span>
          <p>{item.nickname}</p>
        </NickName>
      </Top>
      <Bottom>
        <p>{item.total_volunteer_hours}시간</p>
      </Bottom>
    </Wrapper>
  );
};

export default RankItem;
