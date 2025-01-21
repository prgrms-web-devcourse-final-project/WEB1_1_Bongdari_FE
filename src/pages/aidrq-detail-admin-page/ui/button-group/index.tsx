import { useNavigate } from 'react-router-dom';

import { AdjustmentButton, ButtonWrapper, DeleteButton, EditAidRqButton } from './indexCss';
import { useAlertDialog, useConfirmDialog } from '@/store/stores/dialog/dialogStore';
import { useDeleteAidRq } from '@/store/queries/aidreq-detail-admin-query/useAidRqDetail';

interface ButtonGroupProps {
  id: string | undefined;
  handleAdjustmentButton: () => void;
  status: string;
  volunteerStartDateTime: string;
}

const ButtonGroup = ({ id, handleAdjustmentButton, status, volunteerStartDateTime }: ButtonGroupProps) => {
  const { mutate: deleteAidRq } = useDeleteAidRq();

  const navigate = useNavigate();
  const { openConfirm } = useConfirmDialog();
  const { openAlert } = useAlertDialog();

  const handleDeleteAidRqContent = () => {
    openConfirm('글을 삭제하시겠습니까?', async () => {
      try {
        await deleteAidRq(Number(id), {
          onSuccess: () => {
            openAlert('글이 성공적으로 삭제되었습니다.');
            navigate('/mypage/adminaidreqlist');
          },
          onError: () => {
            openAlert('글을 삭제하던 중 오류가 발생했습니다. 다시 시도해주세요.');
          }
        });
      } catch (error) {
        console.error('글 삭제 중 오류 발생', error);
      }
    });
  };

  //시작일 이전에만 수정이 가능하도록 로직 추가
  const isModificationAllowed = () => {
    if (!volunteerStartDateTime) return true;

    const startDate = new Date(volunteerStartDateTime);
    startDate.setHours(0, 0, 0, 0); // 해당 날짜의 00시 00분으로 설정

    const currentDate = new Date();

    return currentDate < startDate;
  };

  return (
    <ButtonWrapper>
      <EditAidRqButton
        onClick={() =>
          navigate('/mypage/adminaidreqmodify', {
            state: { id: id }
          })
        }
        label="수정하기"
        type="white"
        disabled={!isModificationAllowed()}
      />
      <AdjustmentButton
        label="정산하기"
        type="blue"
        onClick={handleAdjustmentButton}
        disabled={status !== 'COMPLETED'}
      />
      <DeleteButton onClick={handleDeleteAidRqContent}>삭제하기</DeleteButton>
    </ButtonWrapper>
  );
};

export default ButtonGroup;
