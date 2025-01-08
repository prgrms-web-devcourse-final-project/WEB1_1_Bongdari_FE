import AidRqCreateShared from '@/features/aidrq-create-shared-part';
import { ButtonContainer, TextAreaContainer, ThirdLine, Wrapper, ModifyInfoBtn, FourthLine } from './indexCss';
import AidRqCreateRecruitPopulation from '@/components/aidrq-create-recruit-population';
import AidRqCreateDate from '@/components/aidrq-create-date';
import TextArea from '@/components/textArea';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import { updateRegular } from '@/store/queries/aidreq-control-center-query/useModifyAidRqRegular';
import { useAlertDialog, useConfirmDialog } from '@/store/stores/dialog/dialogStore';
import AidRqCreateRecruitHours from '@/components/aidrq-create-hours';
import { validateVolunteerData } from '../../logic/validateVolunteerData';

interface InfoModifyProps {
  id: string;
  getTitleAndFilter: (key: keyof VolunteerType, value: string | number | boolean) => void;
  volunteerData: VolunteerType | null;
  createdAt: string;
}

const InfoModify: React.FC<InfoModifyProps> = ({ id, getTitleAndFilter, volunteerData, createdAt }) => {
  const { openConfirm } = useConfirmDialog();
  const { openAlert } = useAlertDialog();

  if (!volunteerData) {
    return null;
  }

  const changedRegular = {
    title: volunteerData.title,
    content: volunteerData.content,
    region: volunteerData.region,
    recruitment_count: volunteerData.recruitment_count,
    volunteer_start_date_time: volunteerData.volunteer_start_date_time,
    volunteer_end_date_time: volunteerData.volunteer_end_date_time,
    volunteer_category: volunteerData.volunteer_category,
    admitted: volunteerData.admitted,
    volunteer_hours: volunteerData.volunteer_hours
  };

  const handleUpdateInfoDialog = async () => {
    openConfirm(`정보를 수정하시겠습니까?`, async () => {
      const errors = validateVolunteerData(changedRegular, createdAt);

      if (errors.length > 0) {
        openAlert(errors[0]);
        return;
      }

      try {
        await updateRegular(id, changedRegular);
        window.location.href = '/mypage/adminaidreqlist';
        openAlert(`정보가 수정되었습니다.`);
      } catch (error) {
        if (error instanceof Error) {
          openAlert(error.message);
        } else {
          openAlert('수정 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
        console.error('수정오류', error);
      }
    });
  };

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
          <p>활동 시간 (시간단위)</p>
          <AidRqCreateRecruitHours
            getHours={(hours) => {
              getTitleAndFilter('volunteer_hours', hours);
            }}
            hours={volunteerData.volunteer_hours}></AidRqCreateRecruitHours>
        </div>
      </ThirdLine>
      <FourthLine>
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
      </FourthLine>
      <TextAreaContainer>
        <p>본문 내용</p>
        <TextArea
          // TextArea 고쳐주세요!!
          // height="500px"
          key={volunteerData.content}
          getInputText={(text) => {
            getTitleAndFilter('content', text);
          }}
          colortype="white"
          initialVal={volunteerData.content}></TextArea>
      </TextAreaContainer>
      <ButtonContainer>
        <ModifyInfoBtn
          onClick={() => {
            handleUpdateInfoDialog();
          }}
          label="수정하기"
          type="blue"
          disabled={false}></ModifyInfoBtn>
      </ButtonContainer>
    </Wrapper>
  );
};

export default InfoModify;
