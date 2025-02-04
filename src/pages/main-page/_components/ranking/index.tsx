import { useMemo, useState } from 'react';
import _ from 'lodash';

import { Bottom, Title, Top, Wrapper } from './indexCss';
import RankItem from './ui/rank-item';
import TabButtonGroup from '@/components/tab-button';
import { useRanking } from '@/store/queries/main-page-common-query/useFetchRanking';

const Ranking = () => {
  const [activeTab, setActiveTab] = useState<'주단위' | '월단위' | '전체'>('전체');

  const { data, isLoading, error } = useRanking();

  const rankingList = useMemo(() => {
    return (
      data || {
        volunteer_total_ranking_response: [],
        volunteer_monthly_ranking_response: [],
        volunteer_weekly_ranking_response: []
      }
    );
  }, [data]);

  const getActiveRankingList = useMemo(() => {
    const rankingMap = {
      전체: rankingList.volunteer_total_ranking_response,
      월단위: rankingList.volunteer_monthly_ranking_response,
      주단위: rankingList.volunteer_weekly_ranking_response
    };

    const existingRankings = _.chain(rankingMap[activeTab])
      .groupBy('ranking')
      .map((participants, ranking) => ({
        ranking: parseInt(ranking),
        participants
      }))
      .value();

    return Array.from({ length: 4 }, (_, index) => {
      const rank = index + 1;
      const existingRank = existingRankings.find((item) => item.ranking === rank);

      return (
        existingRank || {
          ranking: rank,
          participants: [
            {
              ranking: rank,
              nickname: '공석',
              volunteer_time: 0
            }
          ]
        }
      );
    });
  }, [activeTab, rankingList]);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;

  return (
    <Wrapper>
      <Top>
        <Title>봉사랭킹</Title>
        <TabButtonGroup
          tabs={[{ label: '전체' }, { label: '월단위' }, { label: '주단위' }]}
          initialActiveTab="전체"
          width="80px"
          height="35px"
          fontSize="14px"
          borderRadius="8px"
          onTabChange={(tab) => setActiveTab(tab as '전체' | '월단위' | '주단위')}
        />
      </Top>
      <Bottom>
        {getActiveRankingList.map((item, index) => (
          <RankItem key={`${item.ranking}-${index}`} item={item} index={index} />
        ))}
      </Bottom>
    </Wrapper>
  );
};

export default Ranking;
