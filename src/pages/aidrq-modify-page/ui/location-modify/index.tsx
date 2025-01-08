import AidRqCreateLocation from '@/components/aidrq-create-location';
import { AidRqCreateLocationWrapper, Contents, Wrapper, ModifyLocationBtn } from './indexCss';
import { VolunteerType, Location } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import { updateLocation } from '@/store/queries/aidreq-control-center-query/useModifyAidRqLocation';
import { useAlertDialog, useConfirmDialog } from '@/store/stores/dialog/dialogStore';

interface LocationModifyProps {
  id: string;
  getTitleAndFilter: (key: keyof VolunteerType, value: Location | string | number | boolean) => void;
  volunteerData: VolunteerType | null;
}

const LocationModify: React.FC<LocationModifyProps> = ({ id, getTitleAndFilter, volunteerData }) => {
  const { openConfirm } = useConfirmDialog();
  const { openAlert } = useAlertDialog();

  if (!volunteerData) {
    return null;
  }

  const changedLocation = {
    region: volunteerData.region,
    ...volunteerData.location
  };

  const handleUpdateLocationDialog = async () => {
    openConfirm(`장소를 수정하시겠습니까?`, async () => {
      try {
        await updateLocation(id, changedLocation);
        openAlert(`장소가 수정되었습니다.`);
        window.location.href = '/mypage/adminaidreqlist';
      } catch (error) {
        openAlert('수정 중 오류가 발생했습니다. 다시 시도해주세요.');
        console.error('수정오류', error);
      }
    });
  };

  return (
    <Wrapper>
      <Contents>
        <p>활동 장소</p>
        <AidRqCreateLocationWrapper>
          <AidRqCreateLocation
            getTitleAndFilter={getTitleAndFilter}
            locationData={volunteerData.location}></AidRqCreateLocation>
        </AidRqCreateLocationWrapper>
      </Contents>
      <ModifyLocationBtn
        onClick={() => {
          handleUpdateLocationDialog();
        }}
        label="수정하기"
        type="blue"
        disabled={false}></ModifyLocationBtn>
    </Wrapper>
  );
};

export default LocationModify;
