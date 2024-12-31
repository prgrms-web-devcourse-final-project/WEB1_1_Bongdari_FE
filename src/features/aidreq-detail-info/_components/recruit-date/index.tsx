import useDateFormat from '@/shared/hooks/useDateFormat';
import { Container, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const RecruitDate: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  const { formatDateTime } = useDateFormat();

  const calculateDday = () => {
    const today = new Date();
    const endDate = new Date(data.volunteer_start_date_time);

    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };

  const dDay = calculateDday();

  return (
    <Wrapper>
      <h2>접수기간</h2>
      <Container>
        <div>
          <p>
            <span>모집시작일</span>
            {formatDateTime(data.updated_at)}
          </p>
          <p>
            <span>봉사시작일</span>
            {formatDateTime(data.volunteer_start_date_time)}
          </p>
        </div>
        <div>
          {dDay > 0 ? (
            <p>
              접수마감 <span>{dDay}</span>일 남았습니다.
            </p>
          ) : (
            <p>접수가 마감되었습니다.</p>
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

export default RecruitDate;
