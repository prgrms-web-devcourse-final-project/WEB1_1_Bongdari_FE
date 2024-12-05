import { useEffect, useState } from 'react';
import { Title, Wrapper } from './indexCss';
import InfoModify from './ui/info-modify';
import LocationModify from './ui/location-modify';
import { VolunteerType, Location } from '@/shared/types/aidrq-create-type/AidRqCreateType';

const AidRqModifyPage = () => {
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

  const getTitleAndFilter = (key: keyof VolunteerType, value: Location | string | number | boolean) => {
    setVolunteerData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <Wrapper>
      <Title>도움요청 글 수정</Title>
      <LocationModify getTitleAndFilter={getTitleAndFilter}></LocationModify>
      <InfoModify></InfoModify>
    </Wrapper>
  );
};

export default AidRqModifyPage;
