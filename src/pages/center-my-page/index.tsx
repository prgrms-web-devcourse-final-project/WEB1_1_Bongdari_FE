import EditCenterProfile from '@/features/edit-center-profile';
import RegisterGoods from '@/features/register-goods';
import { PageWrapper } from './indexCss';
import ManageCenterPostSet from '@/features/manage-center-post-set';
import { useGetCenterProfile } from '@/store/queries/center-mypage/useCenterProfile';
import { useLoginStore } from '@/store/stores/login/loginStore';

const CenterMyPage = () => {
  const centerId = useLoginStore((state) => state.myLoginId);
  const { data, isLoading, error } = useGetCenterProfile(centerId || '');

  if (!centerId) {
    return <div>로그인이 필요한 서비스입니다.</div>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>에러 발생: ${error.message}</div>;
  if (!data) return null;

  // console.log('데이터다!', data);

  return (
    <PageWrapper>
      <EditCenterProfile data={data} />
      <RegisterGoods name={data.name} preferData={data.prefer_items || []} />
      <ManageCenterPostSet centerId={centerId} />
    </PageWrapper>
  );
};

export default CenterMyPage;
