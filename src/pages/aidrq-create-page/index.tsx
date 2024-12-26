import { useState } from 'react';

import AidRqCreateShared from '@/features/aidrq-create-shared-part';
import { ButtonContainer, FourthLine, ThirdLine, Title, Wrapper, WriteAidRqBtn } from './indexCss';
import RecruitPopulation from './ui/recruit-population';
import LocationBox from './ui/location';
import VolunteerDate from './ui/volunteer-date';
import Explanation from './ui/explanation';
import { VolunteerType, Location } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import { useNavigate } from 'react-router-dom';
import { usePostAidRq } from '@/store/queries/aidreq-control-center-query/usePostAidRq';
import { useAlertDialog, useConfirmDialog } from '@/store/stores/dialog/dialogStore';

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
  const { openConfirm } = useConfirmDialog();
  const { openAlert } = useAlertDialog();

  const getTitleAndFilter = (key: keyof VolunteerType, value: Location | string | number | boolean) => {
    setVolunteerData((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      await postMutation.mutateAsync({ volunteerData });
      openAlert(`작성이 성공적으로 완료되었습니다.`);
      navigate('/main');
    } catch (error) {
      openAlert(`작성 중 오류가 발생했습니다. 다시 시도해주세요.`);
      console.error('게시글 작성 실패:', error);
    }
  };

  const handleSubmitDialog = () => {
    openConfirm(`작성하시겠습니까?`, () => {
      handleSubmit();
    });
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
        <WriteAidRqBtn
          onClick={handleSubmitDialog}
          label={postMutation.isPending ? '작성 중...' : '작성하기'}
          type="blue"
          disabled={postMutation.isPending}></WriteAidRqBtn>
      </ButtonContainer>
    </Wrapper>
  );
};

export default AidRqCreatePage;
