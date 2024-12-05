import EditCenterProfile from '@/features/edit-center-profile';
import RegisterGoods from '@/features/register-goods';
import { PageWrapper } from './indexCss';
import ManageCenterPostSet from '@/features/manage-center-post-set';
import { useGetCenterProfile } from '@/store/queries/center-mypage/useCenterProfile';
import type { centerProfileType } from '@/shared/types/center-profile/centerProfile';
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

  console.log('데이터다!', data);

  // API 응답 데이터를 centerProfileType 형식으로 변환
  const profileData: centerProfileType = {
    center_id: data.center_id,
    name: data.name,
    contact_number: data.contact_number,
    homepage_link: data.homepage_link,
    introduce: data.introduce,
    img_url: data.img_url,
    interest: false,
    prefer_item: data.prefer_items.map((item) => ({
      id: item.id,
      centerId: item.centerId,
      itemName: item.itemName
    }))
  };

  return (
    <PageWrapper>
      <EditCenterProfile profileData={profileData} />
      <RegisterGoods preferData={profileData.prefer_item || []} />
      <ManageCenterPostSet centerId={centerId} />
    </PageWrapper>
  );
};

export default CenterMyPage;
