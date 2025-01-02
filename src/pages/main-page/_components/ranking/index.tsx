import { useRanking } from '@/store/queries/main-page-common-query/useFetchRanking';
import { Bottom, Title, Top, Wrapper } from './indexCss';
import RankItem from './ui/rank-item';
import { RankingDataType } from '@/shared/types/ranking-data/RankingDataType';
import TabButtonGroup from '@/components/tab-button';

const Ranking = () => {
  const { data, isLoading, error } = useRanking();
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;

  const rankingList: RankingDataType[] = data?.rankings || [];

  return (
    <Wrapper>
      <Top>
        <Title>봉사왕을 소개합니다!</Title>
        <TabButtonGroup
          tabs={[{ label: '주단위' }, { label: '월단위' }, { label: '전체' }]}
          initialActiveTab="주단위"
          width="80px"
          height="35px"
          fontSize="14px"
          borderRadius="8px"
        />
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
