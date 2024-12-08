import FilterSearchBar from '@/components/search-bar/filter-search';
import WriteAidReqButtonComponent from '@/components/write-aidreq-button';
import { PageWrapper, Title } from './indexCss';
import TabButtonGroup from '@/components/tab-button';
import AidRqAdminListWrapper from './_components/aidrqlistadmin-wrapper';
import useAdminSearchStore from '@/store/stores/admin-search/searchStore';
import useChangeStatusTab from '@/shared/hooks/useChangeStatusTab';
import { useInfiniteCenterBoards } from '@/shared/hooks/useCenterInfiniteAidRq';
import { useLoginStore } from '@/store/stores/login/loginStore';

const AdminAidRqListPage = () => {
  const centerId = useLoginStore((state) => state.myLoginId);

  const { handleTabChange } = useChangeStatusTab();
  const { keyword, category, region, admitted, sort, status } = useAdminSearchStore();

  const { searchAidRequests } = useInfiniteCenterBoards(
    centerId || '',
    keyword,
    category,
    region,
    admitted,
    sort,
    status
  );

  if (!centerId) {
    return <div>로그인이 필요한 서비스입니다.</div>;
  }

  return (
    <PageWrapper>
      <Title>내가 등록한 도움요청 글</Title>
      <WriteAidReqButtonComponent />
      <FilterSearchBar searchAidRequests={searchAidRequests} />
      <TabButtonGroup
        onTabChange={handleTabChange}
        tabs={[{ label: '모집중' }, { label: '모집완료' }, { label: '모집종료' }]}
      />
      <AidRqAdminListWrapper centerId={centerId} />
    </PageWrapper>
  );
};

export default AdminAidRqListPage;
