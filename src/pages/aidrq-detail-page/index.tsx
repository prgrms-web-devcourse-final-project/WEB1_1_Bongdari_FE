import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
import { useWithDrawAidRq } from '@/store/queries/aidreq-detail-volunteer-query/useWithdrawAidRq';

const AidRqDetailPage = () => {
  // 로그인 상태 관리
  const myLoginState = useLoginStore((state) => state);
  // url 파라미터 가져오기
  const { id } = useParams();
  // 모달 관리
  const [reviewModalState, SetReviewModalState] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // api 데이터 조회
  const { data: data } = useFetchAidRqDetail(id);
  const { data: centerData } = useFetchCenterProfileForAidRq(data?.center_id ?? '');
  // 다이얼로그 컴포넌트
  const { openConfirm } = useConfirmDialog();
  const { openAlert } = useAlertDialog();
  // 지원상태 관리
  const [presentState, setPresentState] = useState<PresentResponse | null>(null);

  useEffect(() => {
    if (data?.center_id) {
      console.log('센터 아이디 가져옴', data.center_id);
    }
  }, [data]);

  useEffect(() => {
    if (myLoginState.loginType !== 'ROLE_VOLUNTEER') {
      return;
    }
    myPresentStatus(setPresentState, id);
  }, []);

  const { mutate: applyAidRq, isPending: isApplyPending } = useApplyAidRq();
  const { mutate: withdrawAidRq, isPending: isWithdrawPending } = useWithDrawAidRq();

  const handleApply = () => {
    if (!id) return;

    applyAidRq(id, {
      onSuccess: () => {
        // 지원 상태 다시 조회
        myPresentStatus(setPresentState, id);
        // 성공 알림
        openAlert(`지원이 성공적으로 완료되었습니다.`);
      },
      onError: (error) => {
        openAlert('지원 중 오류가 발생했습니다. 다시 시도해주세요.');
        console.error('지원 실패:', error);
      }
    });
  };

  const handleWithdraw = () => {
    if (!id || !presentState?.id) return;

    withdrawAidRq(presentState.id, {
      onSuccess: () => {
        // 지원상태 다시 조회
        myPresentStatus(setPresentState, id);
        // 성공 알림
        openAlert('지원이 성공적으로 철회되었습니다.');
      },
      onError: (error) => {
        openAlert('철회 중 오류가 발생했습니다. 다시 시도해주세요.');
        console.error('철회 실패', error);
      }
    });
  };

  const handleApplyDialog = () => {
    openConfirm(`지원하시겠습니까?`, () => {
      handleApply();
    });
  };

  const handleWithdrawApplyDialog = () => {
    openConfirm('지원을 철회하시겠습니까?', () => {
      handleWithdraw();
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
            label={presentState?.is_reviewed ? '이미 작성한 리뷰가 있습니다' : '리뷰쓰기'}
            type="white"
            disabled={!presentState?.attended || presentState?.is_reviewed}
          />
          <ApplyBtn
            onClick={() => {
              if (presentState?.status === 'none' && data.recruit_status === 'RECRUITING') {
                handleApplyDialog();
              } else if (
                (presentState?.status === 'WAITING' || presentState?.status === 'APPROVED') &&
                data.recruit_status === 'RECRUITING'
              )
                handleWithdrawApplyDialog();
            }}
            label={presentState?.status === 'WAITING' || presentState?.status === 'APPROVED' ? '철회하기' : '지원하기'}
            type="blue"
            disabled={
              isApplyPending ||
              isWithdrawPending ||
              (presentState?.status !== 'none' &&
                presentState?.status !== 'WAITING' &&
                presentState?.status !== 'APPROVED') ||
              data.recruit_status !== 'RECRUITING'
            }
          />
        </ButtonBox>
      )}
      <ReviewCreateModal
        reviewModalState={reviewModalState}
        SetReviewModalState={SetReviewModalState}
        applyId={presentState?.id}></ReviewCreateModal>
      <MessageCreateModal user_id={data?.center_id || ''} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {!data && <p>요청하신 글에 접근이 불가합니다.</p>}
    </Wrapper>
  );
};

export default AidRqDetailPage;
