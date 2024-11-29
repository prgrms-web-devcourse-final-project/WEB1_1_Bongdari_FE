import AidRqDetailAdminContent from '@/features/aidreq-detail-admin-content';
import AidReqDetailAdminInfo from '@/features/aidreq-detail-admin-info';
import AdminReqDetailAdminRecruitState from '@/features/aidreq-detail-admin-recruit-state';
// import { useAidRequestStore } from '@/store/stores/aid-request/aidRequestItemStore';
import { useParams } from 'react-router-dom';
import { PageWrapper } from './indexCss';

const AidRqDetailAdminPage = () => {
  // 라우터 파라미터 가져오기
  const { id } = useParams();
  // const { aidRequest, setAidRequests } = useAidRequestStore();

  console.log('현재 파라미터는', id);

  return (
    <PageWrapper>
      <AidRqDetailAdminContent />
      <AdminReqDetailAdminRecruitState />
      <AidReqDetailAdminInfo />
      <div>
        <button>수정하기</button>
        <button>정산하기</button>
      </div>
    </PageWrapper>
  );
};

export default AidRqDetailAdminPage;
