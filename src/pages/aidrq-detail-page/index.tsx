import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import AidRqDetailCenterProfile from '@/features/aidreq-detail-center-profile';
import { ButtonBox, Wrapper } from './indexCss';
import Title from './ui/title';
import TextContent from './ui/text-content';
import AidRqDetailInfo from '@/features/aidreq-detail-info';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import ReviewCreateModal from '@/features/review-create-modal';
import { useLoginStore } from '@/store/stores/login/loginStore';
import MessageCreateModal from '@/features/message-create-modal';
import { applyAidRq } from '@/store/queries/aidreq-detail-volunteer-query/useApplyAidRq';
import { fetchAidRqDetail } from '@/store/queries/aidreq-detail-volunteer-query/useFetchAidRqDetail';
import { fetchCenterProfileForAidRq } from '@/store/queries/aidreq-detail-volunteer-query/useFetchCenterProfile';
import { myPresentStatus } from '@/store/queries/aidreq-detail-volunteer-query/usePresentStatus';
import { PresentResponse } from '@/shared/types/aidrq-detail/PresentResponse';

const AidRqDetailPage = () => {
  const [data, setData] = useState<AidRqDetailType | null>(null);
  const [centerData, setCenterData] = useState<centerProfileType | null>(null);
  const [reviewModalState, SetReviewModalState] = useState(false);
  const [presentState, setPresentState] = useState<PresentResponse | null>(null);
  const myLoginState = useLoginStore((state) => state);
  const { id } = useParams();
  const location = useLocation();
  const centerId = location.state?.centerId;

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      const data = await fetchAidRqDetail(id);
      setData(data);
      const centerData = await fetchCenterProfileForAidRq(centerId);
      setCenterData(centerData);
      myPresentStatus(setPresentState, myLoginState.myLoginId, id);
    };
    handleFetch();
  }, []);

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
              const handleClick = async () => {
                if (presentState?.status === 'none' && data.recruit_status === 'RECRUITING') {
                  await applyAidRq(id);
                  window.location.reload();
                }
              };
              handleClick();
            }}>
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
