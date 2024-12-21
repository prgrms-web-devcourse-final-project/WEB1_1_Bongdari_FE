import { Container, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';
import { RecruitmentState } from '@/shared/types/recruitment-state/recruitmentStateType';
import { fetchCurrentRecruitment } from '@/store/queries/aidreq-detail-volunteer-query/useCurrentRecruitment';
import { useEffect, useState } from 'react';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const CurrentRecruit: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  const [currentRecruitment, setCurrentRecruitment] = useState<RecruitmentState | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const stats = await fetchCurrentRecruitment(data.id);
        setCurrentRecruitment(stats);
      } catch (error) {
        console.error('통계 데이터 불러오기 실패:', error);
      }
    };

    fetchStats();
  }, [data.id]);

  if (!currentRecruitment) return null;
  return (
    <Wrapper>
      <h2>모집상태</h2>
      <Container>
        <div>
          {data.recruit_status === 'RECRUITING' ? (
            <img src="/assets/imgs/recruit-active.svg" alt=""></img>
          ) : data.recruit_status === 'CLOSED' ? (
            <img src="/assets/imgs/recruit-closed.svg" alt=""></img>
          ) : (
            <img src="/assets/imgs/recruit-completed.svg" alt=""></img>
          )}
        </div>
        <div>
          <p>
            현재 <span>{currentRecruitment.total}</span>명이 지원했습니다.
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default CurrentRecruit;
