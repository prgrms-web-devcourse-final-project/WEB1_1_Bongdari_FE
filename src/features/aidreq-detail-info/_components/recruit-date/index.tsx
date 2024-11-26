import { Container, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const RecruitDate: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  return (
    <Wrapper>
      <h2>접수기간</h2>
      <Container>
        <div>
          <p>
            <span>모집시작일</span>
            {data.updated_at}
          </p>
          <p>
            <span>봉사시작일</span>
            {data.volunteer_start_date_time}
          </p>
        </div>
        <div>
          <p>
            접수마감 <span>1</span>일 남았습니다.
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default RecruitDate;
