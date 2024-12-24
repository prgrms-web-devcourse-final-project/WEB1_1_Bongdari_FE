import { useState } from 'react';

import AidRqCreateShared from '@/features/aidrq-create-shared-part';
import { ButtonContainer, FourthLine, ThirdLine, Title, Wrapper } from './indexCss';
import RecruitPopulation from './ui/recruit-population';
import LocationBox from './ui/location';
import VolunteerDate from './ui/volunteer-date';
import Explanation from './ui/explanation';
import { VolunteerType, Location } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import { useNavigate } from 'react-router-dom';
import { usePostAidRq } from '@/store/queries/aidreq-control-center-query/usePostAidRq';

const AidRqCreatePage = () => {
  const navigate = useNavigate();
  const postMutation = usePostAidRq();
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
  const getTitleAndFilter = (key: keyof VolunteerType, value: Location | string | number | boolean) => {
    setVolunteerData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      await postMutation.mutateAsync({ volunteerData });
      navigate('/main');
    } catch (error) {
      console.error('게시글 작성 실패:', error);
    }
  };

  return (
    <Wrapper>
      <Title>도움요청 글 작성</Title>
      <AidRqCreateShared getTitleAndFilter={getTitleAndFilter} volunteerData={volunteerData}></AidRqCreateShared>
      <ThirdLine>
        <RecruitPopulation getTitleAndFilter={getTitleAndFilter}></RecruitPopulation>
        <LocationBox getTitleAndFilter={getTitleAndFilter}></LocationBox>
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
        <button onClick={handleSubmit} disabled={postMutation.isPending}>
          {postMutation.isPending ? '작성 중...' : '작성하기'}
        </button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default AidRqCreatePage;
