import { useEffect, useState } from 'react';

import AidRqCreateShared from '@/features/aidrq-create-shared-part';
import { ButtonContainer, FourthLine, ThirdLine, Title, Wrapper } from './indexCss';
import RecruitPopulation from './ui/recruit-population';
import Location from './ui/location';
import VolunteerDate from './ui/volunteer-date';
import Explanation from './ui/explanation';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import { postAidRq } from './logic/postAidRq';

const AidRqCreatePage = () => {
  const [volunteerData, setVolunteerData] = useState<VolunteerType>({
    title: '',
    content: '',
    region: '',
    recruitment_count: 0,
    volunteer_start_date_time: '',
    volunteer_end_date_time: '',
    volunteer_category: '',
    admitted: false,
    location: {
      address: '',
      latitude: 0,
      longitude: 0
    }
  });
  useEffect(() => {
    console.log(volunteerData);
  }, [volunteerData]);

  const getTitleAndFilter = (key: keyof VolunteerType, value: string | number | boolean) => {
    setVolunteerData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <Wrapper>
      <Title>도움요청 글 작성</Title>
      <AidRqCreateShared getTitleAndFilter={getTitleAndFilter}></AidRqCreateShared>
      <ThirdLine>
        <RecruitPopulation getTitleAndFilter={getTitleAndFilter}></RecruitPopulation>
        <Location></Location>
      </ThirdLine>
      <FourthLine>
        <VolunteerDate
          label="활동 시작 일시"
          getDate={(date) => {
            getTitleAndFilter('volunteer_start_date_time', date ? date.toLocaleString() : '');
          }}></VolunteerDate>
        <VolunteerDate
          label="활동 종료 일시"
          getDate={(date) => {
            getTitleAndFilter('volunteer_end_date_time', date ? date.toLocaleString() : '');
          }}></VolunteerDate>
      </FourthLine>
      <Explanation getTitleAndFilter={getTitleAndFilter}></Explanation>
      <ButtonContainer>
        <button
          onClick={() => {
            postAidRq(volunteerData);
          }}>
          작성하기
        </button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default AidRqCreatePage;
