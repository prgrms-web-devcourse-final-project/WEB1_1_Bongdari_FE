import AidRqDetailAdminContent from '@/features/aidreq-detail-admin-content';
import AidReqDetailAdminInfo from '@/features/aidreq-detail-admin-info';
import AdminReqDetailAdminRecruitState from '@/features/aidreq-detail-admin-recruit-state';
import { useParams } from 'react-router-dom';
import { PageWrapper } from './indexCss';
import ButtonGroup from './ui/button-group';
import { useState } from 'react';
import AdjustmentModal from '@/features/adjustment-modal';
import { useUpdateRecruitStatus, type RecruitStatus } from '@/store/queries/aidreq-detail-center/useRecruitBoard';

const AidRqDetailAdminPage = () => {
  // 라우터 파라미터 가져오기
  const { id } = useParams();
  const [openAdjustmentModal, setOpenAdjustmentModal] = useState(false);

  // 봉사모집글 상세조회 API ------------------------------------
  const { mutate: updateStatus, isPending: isUpdating } = useUpdateRecruitStatus();

  const handleAdjustmentButton = () => {
    setOpenAdjustmentModal(!openAdjustmentModal);
  };

  const handleStatusUpdate = (status: RecruitStatus) => {
    if (!id) return;

    const recruitId = parseInt(id, 10);
    if (isNaN(recruitId)) return;

    updateStatus({ id: recruitId, status });
  };

  console.log('현재 파라미터는', id);

  // 봉사 활동 모집글 상태 수정 ------------------------------------

  return (
    <>
      <PageWrapper>
        <AidRqDetailAdminContent />
        <AdminReqDetailAdminRecruitState
          currentStatus="RECRUITING"
          handleStatusUpdate={handleStatusUpdate}
          isUpdating={isUpdating}
        />
        <AidReqDetailAdminInfo />
        <ButtonGroup handleAdjustmentButton={handleAdjustmentButton} />
      </PageWrapper>
      {openAdjustmentModal && <AdjustmentModal setOpenAdjustmentModal={setOpenAdjustmentModal} />}
    </>
  );
};

export default AidRqDetailAdminPage;
