import AidRqDetailAdminContent from '@/features/aidreq-detail-admin-content';
import AidReqDetailAdminInfo from '@/features/aidreq-detail-admin-info';
import AdminReqDetailAdminRecruitState from '@/features/aidreq-detail-admin-recruit-state';
import { useParams } from 'react-router-dom';
import { PageWrapper } from './indexCss';
import ButtonGroup from './ui/button-group';
import { useState } from 'react';
import AdjustmentModal from '@/features/adjustment-modal';
import { useUpdateRecruitStatus, type RecruitStatus } from '@/store/queries/aidreq-detail-center/useRecruitBoard';
import { useGetRecruitDetail } from '@/store/queries/aidreq-detail-center/useAidRqDetail';

const AidRqDetailAdminPage = () => {
  const { id } = useParams();
  const parsedId = id ? parseInt(id, 10) : 0;
  const [openAdjustmentModal, setOpenAdjustmentModal] = useState(false);

  // 봉사모집글 상세조회 API
  const { mutate: updateStatus, isPending: isUpdating } = useUpdateRecruitStatus();

  // 봉사 활동 모집글 상태 수정 API
  const { data: recruitDetailData, isLoading: isRecruitDetailDataLoading, error } = useGetRecruitDetail(parsedId);

  if (isRecruitDetailDataLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!recruitDetailData) return null;

  // 정산하기 버튼 클릭 -> 모달 오픈 핸들러
  const handleAdjustmentButton = () => {
    setOpenAdjustmentModal(!openAdjustmentModal);
  };

  // 상태 변경 적용 핸들러
  const handleStatusUpdate = (status: RecruitStatus) => {
    if (!id) return;
    if (isNaN(parsedId)) return;
    updateStatus({ id: parsedId, status });
  };

  return (
    <>
      <PageWrapper>
        <AidRqDetailAdminContent recruitDetailData={recruitDetailData} />
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
