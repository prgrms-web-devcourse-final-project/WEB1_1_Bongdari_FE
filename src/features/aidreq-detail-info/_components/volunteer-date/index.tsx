import { Container, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const VolunteerDate: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  return (
    <Wrapper>
      <h2>활동시간</h2>
      <Container>
        <div>
          <p>
            <span>활동시작시각</span>
            {data.volunteer_start_date_time}
          </p>
          <p>
            <span>활동종료시각</span>
            {data.volunteer_end_date_time}
          </p>
        </div>
        <div>
          <p>
            활동시간 <span>{data.volunteer_time.split(':')[0].replace('T', '')}</span> 시간 입니다.
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default VolunteerDate;
