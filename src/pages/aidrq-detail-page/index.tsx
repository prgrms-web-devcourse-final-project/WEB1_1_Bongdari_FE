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
import { fetchAidRqDetail } from './logic/fetchAidRqDetail';
import { fetchCenterProfile } from './logic/fetchCenterProfile';
import { applyAidRq } from './logic/applyAidRq';
import { myPresentStatus } from './logic/myPresentStatus';
import { useLoginStore } from '@/store/stores/login/loginStore';

interface ApiResponse {
  code: number;
  message: string;
  data: AidRqDetailType;
}

interface CenterResponse {
  code: number;
  message: string;
  data: centerProfileType;
}

interface PresentResponse {
  status: string;
  attended: boolean;
}

const AidRqDetailPage = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [centerData, setCenterData] = useState<CenterResponse | null>(null);
  const [reviewModalState, SetReviewModalState] = useState(false);
  const [presentState, setPresentState] = useState<PresentResponse | null>(null);
  const myLoginState = useLoginStore((state) => state);
  const { id } = useParams();
  const location = useLocation();
  const centerId = location.state?.centerId;

  useEffect(() => {
    fetchAidRqDetail(setData, id);
    fetchCenterProfile(setCenterData, centerId);
    myPresentStatus(setPresentState, myLoginState.myLoginId, id);
  }, []);

  useEffect(() => {
    console.log(presentState);
  }, [presentState]);

  return (
    <Wrapper>
      {data && <Title data={data.data}></Title>}
      {centerData && <AidRqDetailCenterProfile data={centerData.data}></AidRqDetailCenterProfile>}
      {data && <TextContent data={data.data}></TextContent>}
      {data && <AidRqDetailInfo data={data.data}></AidRqDetailInfo>}
      {data && myLoginState.loginType === 'person' && (
        <ButtonBox presentstate={presentState}>
          <button
            onClick={() => {
              SetReviewModalState(true);
            }}>
            리뷰쓰기
          </button>
          <button
            onClick={() => {
              if (!presentState) applyAidRq(id);
            }}>
            지원하기
          </button>
        </ButtonBox>
      )}
      <ReviewCreateModal
        reviewModalState={reviewModalState}
        SetReviewModalState={SetReviewModalState}></ReviewCreateModal>
      {!data && <p>요청하신 글에 접근이 불가합니다.</p>}
    </Wrapper>
  );
};

export default AidRqDetailPage;
