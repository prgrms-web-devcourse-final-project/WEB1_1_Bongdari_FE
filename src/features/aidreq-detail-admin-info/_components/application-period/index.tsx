import useDateFormat from '@/shared/hooks/useDateFormat';
import { DateInfo, DateInfoWrap, DateTag, SectionBox2, TimeInfo, Title } from '../../indexCss';
import { DueDate, InfoSubTitle, TitleBox } from './indexCss';
import useCalculateDeadline from '@/shared/hooks/useRemainingDays';

interface ApplicationPeriodProps {
  createdAt: string;
  startDateTime: string;
  endDateTime: string;
}

const ApplicationPeriod = ({ createdAt, startDateTime, endDateTime }: ApplicationPeriodProps) => {
  const { formatDateDot } = useDateFormat();
  const { calculateRemainingDays } = useCalculateDeadline();

  const remainingDays = calculateRemainingDays(endDateTime);
  return (
    <div>
      <TitleBox>
        <Title>접수 기간</Title>
        <InfoSubTitle>접수는 봉사활동 시작일 하루 전에 자동으로 마감됩니다.</InfoSubTitle>
      </TitleBox>
      <SectionBox2>
        <DateInfoWrap>
          <DateInfo>
            <DateTag>모집 시작일</DateTag> <TimeInfo>{formatDateDot(createdAt)}</TimeInfo>
          </DateInfo>
          <DateInfo>
            <DateTag>봉사 시작일</DateTag> <TimeInfo>{formatDateDot(startDateTime)}</TimeInfo>
          </DateInfo>
        </DateInfoWrap>
        {remainingDays > 0 ? (
          <TimeInfo>
            접수 마감 &nbsp;<DueDate>{remainingDays}</DueDate>&nbsp;일 남았습니다.
          </TimeInfo>
        ) : (
          <TimeInfo>
            접수 &nbsp;<DueDate>마감</DueDate>&nbsp;되었습니다.
          </TimeInfo>
        )}
      </SectionBox2>
    </div>
  );
};

export default ApplicationPeriod;
