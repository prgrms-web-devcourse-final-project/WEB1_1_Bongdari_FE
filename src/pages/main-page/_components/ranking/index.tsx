import { Bottom, Title, Top, Wrapper } from './indexCss';
import { useRanking } from './logic/fetchRanking';
import RankItem from './ui/rank-item';
import { RankingDataType } from '@/shared/types/ranking-data/RankingDataType';

const Ranking = () => {
  const { data, isLoading, error } = useRanking();
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;

  const rankingList: RankingDataType[] = data?.rankings || [];

  return (
    <Wrapper>
      <Top>
        <Title>이주의 봉사왕은?</Title>
      </Top>
      <Bottom>
        {rankingList.map((item, index) => (
          <RankItem key={item.volunteer_id} item={item} index={index}></RankItem>
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default Ranking;
