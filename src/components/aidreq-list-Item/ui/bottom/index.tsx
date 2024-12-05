import useDateFormat from '@/shared/hooks/useDateFormat';
import { AidTime, RegisterDate, StartDate, Wrapper } from './indexCss';

interface BottomProps {
  created_at: string;
  volunteer_start_date_time: string;
  volunteer_time: string;
}

const Bottom = ({ created_at, volunteer_start_date_time, volunteer_time }: BottomProps) => {
  const { formatDate, formatTime } = useDateFormat();
  return (
    <Wrapper>
      <RegisterDate>
        <p>등록 일자</p>
        <p>{formatDate(created_at)}</p>
      </RegisterDate>
      <StartDate>
        <p>활동 시작 일자</p>
        <p>{formatDate(volunteer_start_date_time)}</p>
      </StartDate>
      <AidTime>
        <p>활동 시간</p>
        {/* 분? 단위로 보내주는지 */}
        <p>{volunteer_time && formatTime(volunteer_time)}시간</p>
      </AidTime>
    </Wrapper>
  );
};

export default Bottom;
