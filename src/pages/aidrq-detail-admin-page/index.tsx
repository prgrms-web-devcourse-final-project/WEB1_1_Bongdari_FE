// import AidRqDetailAdminContent from '@/features/aidreq-detail-admin-content';
// import AidReqDetailAdminInfo from '@/features/aidreq-detail-admin-info';
// import AdminReqDetailAdminRecruitState from '@/features/aidreq-detail-admin-recruit-state';
// import { useParams } from 'react-router-dom';
// import { PageWrapper } from './indexCss';
// import ButtonGroup from './ui/button-group';
// import { useState } from 'react';
// import AdjustmentModal from '@/features/adjustment-modal';
// import { useGetRecruitDetail } from '@/store/queries/aidreq-detail-center/useAidRqDetail';
// import type { RecruitAPIState } from '@/shared/mapping/aid-recruit-status-mapping';

// const AidRqDetailAdminPage = () => {
//   const { id } = useParams();
//   const parsedId = id ? parseInt(id, 10) : 0;
//   const [openAdjustmentModal, setOpenAdjustmentModal] = useState(false);

//   // 봉사 활동 모집글 상세 조회 API
//   const { data: recruitDetailData, isLoading, error } = useGetRecruitDetail(parsedId);

//   if (isLoading) return <div>로딩 중...</div>;
//   if (error) return <div>에러가 발생했습니다.</div>;
//   if (!recruitDetailData) return null;

//   // 정산하기 버튼 클릭 -> 모달 오픈 핸들러
//   const handleAdjustmentButton = () => {
//     setOpenAdjustmentModal(!openAdjustmentModal);
//   };

//   // console.log('모집글상세 데이터 하이', recruitDetailData);

//   return (
//     <>
//       <PageWrapper>
//         <AidRqDetailAdminContent recruitDetailData={recruitDetailData} />
//         <AdminReqDetailAdminRecruitState
//           currentStatus={recruitDetailData.recruit_status as RecruitAPIState}
//           id={parsedId}
//           applicantCount={recruitDetailData.recruitment_count}
//           startDate={recruitDetailData.volunteer_start_date_time}
//         />
//         <AidReqDetailAdminInfo recruitDetailData={recruitDetailData} />
//         <ButtonGroup
//           id={id}
//           handleAdjustmentButton={handleAdjustmentButton}
//           status={recruitDetailData.recruit_status}
//         />
//       </PageWrapper>
//       {openAdjustmentModal && <AdjustmentModal setOpenAdjustmentModal={setOpenAdjustmentModal} />}
//     </>
//   );
// };

// export default AidRqDetailAdminPage;

import AidRqDetailAdminContent from '@/features/aidreq-detail-admin-content';
import AidReqDetailAdminInfo from '@/features/aidreq-detail-admin-info';
import AdminReqDetailAdminRecruitState from '@/features/aidreq-detail-admin-recruit-state';
import { useParams } from 'react-router-dom';
import { PageWrapper } from './indexCss';
import ButtonGroup from './ui/button-group';
import { useState } from 'react';
import AdjustmentModal from '@/features/adjustment-modal';
import { useGetRecruitDetail } from '@/store/queries/aidreq-detail-center/useAidRqDetail';
import type { RecruitAPIState } from '@/shared/mapping/aid-recruit-status-mapping';
import { useCurrentRecruitment } from '@/store/queries/aidreq-detail-center/useApplicantStatus';

const AidRqDetailAdminPage = () => {
  const { id } = useParams();
  const parsedId = id ? parseInt(id, 10) : 0;
  const [openAdjustmentModal, setOpenAdjustmentModal] = useState(false);

  // 봉사 활동 모집글 상세 조회 API
  const { data: recruitDetailData, isLoading: isDetailLoading, error: detailError } = useGetRecruitDetail(parsedId);

  const {
    data: currentRecruitData,
    isLoading: isCurrentLoading,
    error: currentError
  } = useCurrentRecruitment(parsedId);

  if (isDetailLoading || isCurrentLoading) return <div>로딩 중...</div>;
  if (detailError || currentError) return <div>에러가 발생했습니다.</div>;
  if (!recruitDetailData || !currentRecruitData) return null;

  // 정산하기 버튼 클릭 -> 모달 오픈 핸들러
  const handleAdjustmentButton = () => {
    setOpenAdjustmentModal(!openAdjustmentModal);
  };

  // console.log('모집글상세 데이터 하이', recruitDetailData);

  return (
    <>
      <PageWrapper>
        <AidRqDetailAdminContent recruitDetailData={recruitDetailData} />
        <AdminReqDetailAdminRecruitState
          currentStatus={recruitDetailData.recruit_status as RecruitAPIState}
          id={parsedId}
          total={currentRecruitData.total}
          startDate={recruitDetailData.volunteer_start_date_time}
        />
        <AidReqDetailAdminInfo recruitDetailData={recruitDetailData} />
        <ButtonGroup
          id={id}
          handleAdjustmentButton={handleAdjustmentButton}
          status={recruitDetailData.recruit_status}
        />
      </PageWrapper>
      {openAdjustmentModal && <AdjustmentModal setOpenAdjustmentModal={setOpenAdjustmentModal} />}
    </>
  );
};

export default AidRqDetailAdminPage;
