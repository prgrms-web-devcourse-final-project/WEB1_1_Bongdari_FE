import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import AidRqDetailCenterProfile from '@/features/aidreq-detail-center-profile';
import { ButtonBox, Wrapper } from './indexCss';
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

  useEffect(() => {
    myPresentStatus(setPresentState, myLoginState.myLoginId, id);
  }, []);

  const { mutate: applyAidRq, isPending } = useApplyAidRq();

  const handleApply = () => {
    if (!id) return;

    applyAidRq(id, {
      onSuccess: () => {
        // 성공 시 처리 (예: 알림 표시, 페이지 새로고침 등)
        console.log('지원 성공!');
        window.location.reload();
      },
      onError: (error) => {
        // 에러 처리
        console.error('지원 실패:', error);
      }
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
          <button
            onClick={() => {
              if (presentState?.attended) SetReviewModalState(true);
            }}>
            리뷰쓰기
          </button>
          <button
            onClick={() => {
              const handleClick = () => {
                if (presentState?.status === 'none' && data.recruit_status === 'RECRUITING') {
                  handleApply();
                  window.location.reload();
                }
              };
              handleClick();
            }}
            disabled={isPending}>
            지원하기
          </button>
        </ButtonBox>
      )}
      <ReviewCreateModal
        reviewModalState={reviewModalState}
        SetReviewModalState={SetReviewModalState}
        recruitBoardId={Number(id)}></ReviewCreateModal>
      <MessageCreateModal user_id={centerId || ''} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {!data && <p>요청하신 글에 접근이 불가합니다.</p>}
    </Wrapper>
  );
};

export default AidRqDetailPage;
