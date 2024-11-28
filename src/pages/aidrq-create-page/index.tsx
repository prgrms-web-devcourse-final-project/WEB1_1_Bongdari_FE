import { useEffect, useState } from 'react';

import AidRqCreateShared from '@/features/aidrq-create-shared-part';
import { FourthLine, ThirdLine, Title, Wrapper } from './indexCss';
import RecruitPopulation from './ui/recruit-population';
import Location from './ui/location';
import VolunteerDate from './ui/volunteer-date';
import Explanation from './ui/explanation';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';

const AidRqCreatePage = () => {
  const [volunteerData, setVolunteerData] = useState<VolunteerType>({
    title: '',
    content: '',
    region: '',
    recruitment_count: 0,
    volunteer_start_date_time: '',
    volunteer_end_date_time: '',
    volunteer_type: '',
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

  const getTitleAndFilter = (key: keyof VolunteerType, value: string | number) => {
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
        <VolunteerDate label="활동 시작 일시"></VolunteerDate>
        <VolunteerDate label="활동 종료 일시"></VolunteerDate>
      </FourthLine>
      <Explanation></Explanation>
    </Wrapper>
  );
};

export default AidRqCreatePage;
