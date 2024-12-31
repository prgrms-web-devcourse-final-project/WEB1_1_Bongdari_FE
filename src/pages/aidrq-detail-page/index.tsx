import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import AidRqDetailCenterProfile from '@/features/aidreq-detail-center-profile';
import { ButtonBox, Wrapper, ReviewBtn, ApplyBtn } from './indexCss';
import Title from './ui/title';
import TextContent from './ui/text-content';
import AidRqDetailInfo from '@/features/aidreq-detail-info';
import ReviewCreateModal from '@/features/review-create-modal';
import { useLoginStore } from '@/store/stores/login/loginStore';
import MessageCreateModal from '@/features/message-create-modal';
import { useFetchCenterProfileForAidRq } from '@/store/queries/aidreq-detail-volunteer-query/useFetchCenterProfile';
import { myPresentStatus } from '@/store/queries/aidreq-detail-volunteer-query/usePresentStatus';
import { PresentResponse } from '@/shared/types/aidrq-detail/PresentResponse';
import { useFetchAidRqDetail } from '@/store/queries/aidreq-detail-volunteer-query/useFetchAidRqDetail';
import { useApplyAidRq } from '@/store/queries/aidreq-detail-volunteer-query/useApplyAidRq';
import { useAlertDialog, useConfirmDialog } from '@/store/stores/dialog/dialogStore';

const AidRqDetailPage = () => {
  const myLoginState = useLoginStore((state) => state);
  const { id } = useParams();
  const location = useLocation();
  const centerId = location.state?.centerId;
  const [reviewModalState, SetReviewModalState] = useState(false);
  const [presentState, setPresentState] = useState<PresentResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: centerData } = useFetchCenterProfileForAidRq(centerId);
  const { data: data } = useFetchAidRqDetail(id);
  const { openConfirm } = useConfirmDialog();
  const { openAlert } = useAlertDialog();

  useEffect(() => {
    myPresentStatus(setPresentState, myLoginState.myLoginId, id);
  }, []);

  const { mutate: applyAidRq, isPending } = useApplyAidRq();

  const handleApply = () => {
    if (!id) return;

    applyAidRq(id, {
      onSuccess: () => {
        // 지원 상태 다시 조회
        myPresentStatus(setPresentState, myLoginState.myLoginId, id);
        // 성공 알림
        openAlert(`지원이 성공적으로 완료되었습니다.`);
      },
      onError: (error) => {
        openAlert('지원 중 오류가 발생했습니다. 다시 시도해주세요.');
        console.error('지원 실패:', error);
      }
    });
  };

  const handleApplyDialog = () => {
    openConfirm(`지원하시겠습니까?`, () => {
      handleApply();
    });
  };

  return (
    <Wrapper>
      {data && <Title data={data}></Title>}
      {centerData && (
        <AidRqDetailCenterProfile data={centerData} setIsModalOpen={setIsModalOpen}></AidRqDetailCenterProfile>
      )}
      {data && <TextContent data={data}></TextContent>}
      {data && <AidRqDetailInfo data={data}></AidRqDetailInfo>}
      {data && myLoginState.loginType === 'ROLE_VOLUNTEER' && (
        <ButtonBox presentstate={presentState} recstatus={data.recruit_status}>
          <ReviewBtn
            onClick={() => {
              if (presentState?.attended) SetReviewModalState(true);
            }}
            label="리뷰쓰기"
            type="white"
            disabled={!presentState?.attended}></ReviewBtn>
          <ApplyBtn
            onClick={() => {
              if (presentState?.status === 'none' && data.recruit_status === 'RECRUITING') {
                handleApplyDialog();
              }
            }}
            label="지원하기"
            type="blue"
            disabled={isPending || presentState?.status !== 'none' || data.recruit_status !== 'RECRUITING'}></ApplyBtn>
        </ButtonBox>
      )}
      <ReviewCreateModal
        reviewModalState={reviewModalState}
        SetReviewModalState={SetReviewModalState}
        applyId={presentState?.id}></ReviewCreateModal>
      <MessageCreateModal user_id={centerId || ''} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {!data && <p>요청하신 글에 접근이 불가합니다.</p>}
    </Wrapper>
  );
};

export default AidRqDetailPage;
