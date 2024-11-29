import { DateInfo, DateInfoWrap, DateTag, SectionBox2, TimeInfo, Title } from '../../indexCss';
import { DueDate, InfoSubTitle, TitleBox } from './indexCss';

const ApplicationPeriod = () => {
  return (
    <div>
      <TitleBox>
        <Title>접수 기간</Title>
        <InfoSubTitle>접수는 봉사활동 시작일 하루 전에 자동으로 마감됩니다.</InfoSubTitle>
      </TitleBox>
      <SectionBox2>
        <DateInfoWrap>
          <DateInfo>
            <DateTag>모집 시작일</DateTag> <TimeInfo>2024. 11. 18 15:00</TimeInfo>
          </DateInfo>
          <DateInfo>
            <DateTag>봉사 시작일</DateTag> <TimeInfo>24. 11. 20 11:00</TimeInfo>
          </DateInfo>
        </DateInfoWrap>
        <TimeInfo>
          접수 마감 <DueDate>1</DueDate>일 남았습니다.
        </TimeInfo>
      </SectionBox2>
    </div>
  );
};

export default ApplicationPeriod;
