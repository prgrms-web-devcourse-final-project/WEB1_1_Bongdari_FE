import AidRqCreateShared from '@/features/aidrq-create-shared-part';
import { ButtonContainer, TextAreaContainer, ThirdLine, Wrapper, ModifyInfoBtn } from './indexCss';
import AidRqCreateRecruitPopulation from '@/components/aidrq-create-recruit-population';
import AidRqCreateDate from '@/components/aidrq-create-date';
import TextArea from '@/components/textArea';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import { updateRegular } from '@/store/queries/aidreq-control-center-query/useModifyAidRqRegular';
import { useAlertDialog, useConfirmDialog } from '@/store/stores/dialog/dialogStore';

interface InfoModifyProps {
  id: string;
  getTitleAndFilter: (key: keyof VolunteerType, value: string | number | boolean) => void;
  volunteerData: VolunteerType | null;
}

const InfoModify: React.FC<InfoModifyProps> = ({ id, getTitleAndFilter, volunteerData }) => {
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
    admitted: volunteerData.admitted
  };

  const handleUpdateInfoDialog = () => {
    openConfirm(`정보를 수정하시겠습니까?`, () => {
      try {
        updateRegular(id, changedRegular);
        openAlert(`정보가 수정되었습니다.`);
      } catch (error) {
        openAlert('수정 중 오류가 발생했습니다. 다시 시도해주세요.');
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
