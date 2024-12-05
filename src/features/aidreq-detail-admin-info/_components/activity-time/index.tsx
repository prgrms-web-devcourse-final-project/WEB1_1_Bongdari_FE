import useDateFormat from '@/shared/hooks/useDateFormat';
import { DateInfo, DateInfoWrap, DateTag, SectionBox2, TimeInfo, Title } from '../../indexCss';
import { ActiveTime } from './indexCss';

interface ActivityTimeProps {
  startDateTime: string;
  endDateTime: string;
  volunteerTime: string;
}

const ActivityTime = ({ startDateTime, endDateTime, volunteerTime }: ActivityTimeProps) => {
  const { formatTime, formatDateTime } = useDateFormat();

  return (
    <div>
      <Title>활동시간</Title>
      <SectionBox2>
        <DateInfoWrap>
          <DateInfo>
            <DateTag>활동 시작시각</DateTag> <TimeInfo>{formatDateTime(startDateTime)}</TimeInfo>
          </DateInfo>
          <DateInfo>
            <DateTag>활동 마감시각</DateTag> <TimeInfo>{formatDateTime(endDateTime)}</TimeInfo>
          </DateInfo>
        </DateInfoWrap>
        <TimeInfo>
          활동 시간 &nbsp;<ActiveTime>{formatTime(volunteerTime)}</ActiveTime>&nbsp;시간 입니다.
        </TimeInfo>
      </SectionBox2>
    </div>
  );
};

export default ActivityTime;
