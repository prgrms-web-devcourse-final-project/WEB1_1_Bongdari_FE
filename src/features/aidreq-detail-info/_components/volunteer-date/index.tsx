import useDateFormat from '@/shared/hooks/useDateFormat';
import { Container, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const VolunteerDate: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  const { formatDateTime } = useDateFormat();
  return (
    <Wrapper>
      <h2>활동시간</h2>
      <Container>
        <div>
          <p>
            <span>활동시작시각</span>
            {formatDateTime(data.volunteer_start_date_time)}
          </p>
          <p>
            <span>활동종료시각</span>
            {formatDateTime(data.volunteer_end_date_time)}
          </p>
        </div>
        <div>
          <p>
            활동시간 <span>{data.volunteer_hours}</span> 시간 입니다.
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default VolunteerDate;
