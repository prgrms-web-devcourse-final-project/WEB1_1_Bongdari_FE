import AidRqCreateShared from '@/features/aidrq-create-shared-part';
import { ButtonContainer, TextAreaContainer, ThirdLine, Wrapper } from './indexCss';
import AidRqCreateRecruitPopulation from '@/components/aidrq-create-recruit-population';
import AidRqCreateDate from '@/components/aidrq-create-date';
import TextArea from '@/components/textArea';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import { useEffect } from 'react';
import { updateRegular } from './logic/modifyAidRqRegular';

interface InfoModifyProps {
  id: string;
  getTitleAndFilter: (key: keyof VolunteerType, value: string | number | boolean) => void;
  volunteerData: VolunteerType;
}

const InfoModify: React.FC<InfoModifyProps> = ({ id, getTitleAndFilter, volunteerData }) => {
  const changedRegular = {
    title: volunteerData.title,
    content: volunteerData.content,
    region: volunteerData.region,
    recruitment_count: volunteerData.recruitment_count,
    volunteer_start_date_time: volunteerData.volunteer_start_date_time,
    volunteer_end_date_time: volunteerData.volunteer_end_date_time,
    volunteer_category: volunteerData.volunteer_category,
    admitted: volunteerData.admitted
  };

  useEffect(() => {
    console.log('넘기기직전데이터', volunteerData);
  }, [volunteerData]);
  return (
    <Wrapper>
      <AidRqCreateShared getTitleAndFilter={getTitleAndFilter} volunteerData={volunteerData}></AidRqCreateShared>
      <ThirdLine>
        <div>
          <p>모집 예상 인원</p>
          <AidRqCreateRecruitPopulation
            getPopulation={(data) => {
              getTitleAndFilter('recruitment_count', data);
            }}
            recruitmentcount={volunteerData.recruitment_count}></AidRqCreateRecruitPopulation>
        </div>
        <div>
          <p>활동 시작 일시</p>
          <AidRqCreateDate
            getDate={(date) => {
              if (date !== null) getTitleAndFilter('volunteer_start_date_time', date);
            }}
            datetime={volunteerData.volunteer_start_date_time}></AidRqCreateDate>
        </div>
        <div>
          <p>활동 종료 일시</p>
          <AidRqCreateDate
            getDate={(date) => {
              if (date !== null) getTitleAndFilter('volunteer_end_date_time', date);
            }}
            datetime={volunteerData.volunteer_end_date_time}></AidRqCreateDate>
        </div>
      </ThirdLine>
      <TextAreaContainer>
        <p>본문 내용</p>
        <TextArea
          key={volunteerData.content}
          getInputText={(text) => {
            console.log(text);
          }}
          width="100%"
          height="500px"
          colortype={0}
          initialVal={volunteerData.content}></TextArea>
      </TextAreaContainer>
      <ButtonContainer>
        <button
          onClick={() => {
            updateRegular(id, changedRegular);
          }}>
          수정하기
        </button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default InfoModify;
