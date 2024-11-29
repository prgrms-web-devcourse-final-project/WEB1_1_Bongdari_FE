import { DateInfo, DateInfoWrap, DateTag, SectionBox2, TimeInfo, Title } from '../../indexCss';
import { ActiveTime } from './indexCss';

const ActivityTime = () => {
  return (
    <div>
      <Title>활동시간</Title>
      <SectionBox2>
        <DateInfoWrap>
          <DateInfo>
            <DateTag>활동 시작시각</DateTag> <TimeInfo>2024. 11. 20 11:00</TimeInfo>
          </DateInfo>
          <DateInfo>
            <DateTag>활동 마감시각</DateTag> <TimeInfo>24. 11. 20 15:00</TimeInfo>
          </DateInfo>
        </DateInfoWrap>
        <TimeInfo>
          활동 시간 &nbsp;<ActiveTime>1</ActiveTime>&nbsp;시간 입니다.
        </TimeInfo>
      </SectionBox2>
    </div>
  );
};

export default ActivityTime;
