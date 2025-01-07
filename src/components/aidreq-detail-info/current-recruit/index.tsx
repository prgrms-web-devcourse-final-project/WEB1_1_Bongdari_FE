import { Container, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';
import { useCurrentRecruitment } from '@/store/queries/aidreq-detail-volunteer-query/useCurrentRecruitment';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const CurrentRecruit: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  const { data: currentRecruitment, isLoading, error } = useCurrentRecruitment(data.id);

  if (error) {
    console.error('Error:', error);
    return <div>데이터를 불러오는데 실패했습니다</div>;
  }
  if (isLoading || !currentRecruitment) return null;
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
