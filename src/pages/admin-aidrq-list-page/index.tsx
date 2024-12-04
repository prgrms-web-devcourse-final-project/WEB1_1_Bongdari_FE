import FilterSearchBar from '@/components/search-bar/filter-search';
import WriteAidReqButtonComponent from '@/components/write-aidreq-button';
import { PageWrapper, Title } from './indexCss';
import TabButtonGroup from '@/components/tab-button';
import AidRqAdminListWrapper from './_components/aidrqlistadmin-wrapper';
import useAdminSearchStore from '@/store/stores/admin-search/searchStore';
import useChangeStatusTab from '@/shared/hooks/useChangeStatusTab';
import { useInfiniteCenterBoards } from '@/shared/hooks/useCenterInfiniteAidRq';

const AdminAidRqListPage = () => {
  const centerId = 'B8473384-AE17-11EF-AA15-0A855994FB4B'; // TODO: centerId를 동적으로 받아오도록 수정 필요
  const { handleTabChange } = useChangeStatusTab();
  const { keyword, category, region, admitted, sort, status } = useAdminSearchStore();

  const { searchAidRequests } = useInfiniteCenterBoards(centerId, keyword, category, region, admitted, sort, status);

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
