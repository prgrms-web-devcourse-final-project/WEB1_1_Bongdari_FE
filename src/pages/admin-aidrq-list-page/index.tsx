import FilterSearchBar from '@/components/search-bar/filter-search';
import WriteAidReqButtonComponent from '@/components/write-aidreq-button';
import { PageWrapper, Title } from './indexCss';
import TabButtonGroup from '@/components/tab-button';
import AidRqAdminListWrapper from './_components/aidrqlistadmin-wrapper';
import { useLocation } from 'react-router-dom';
import useSearchStore from '@/store/stores/search/searchStore';
import useAdminSearchStore from '@/store/stores/admin-search/searchStore';
import { useEffect } from 'react';

const AdminAidRqListPage = () => {
  const tabs = [{ label: '모집중' }, { label: '모집완료' }, { label: '종료' }];

  const handleTabChange = () => {
    console.log('TODO: 실행함수 넣기');
  };

  const handleSearchAidRequests = () => {
    // api 호출 로직 와야 함
    console.log('요청 검색 실행');
  };

  // store 확인용 - 삭제 예정 ----------------------------------------
  const location = useLocation();

  const searchState = useSearchStore((state) => state);
  const adminSearchState = useAdminSearchStore((state) => state);

  useEffect(() => {
    console.log('Search Store State:', searchState.keyword);
    console.log('Admin Search Store State:', adminSearchState.keyword);
  }, [searchState, adminSearchState]);

  console.log('현재 경로', location.pathname);
  console.log(
    '사용하고 있는 store 확인:',
    location.pathname === '/aidrqlist' ? 'AidRqList Store' : 'AdminAidRqList Store'
  );
  // -----------------------------------------------------------------

  return (
    <PageWrapper>
      <Title>내가 등록한 도움요청 글</Title>
      <WriteAidReqButtonComponent />
      <FilterSearchBar searchAidRequests={handleSearchAidRequests} />
      <TabButtonGroup tabs={tabs} onTabChange={handleTabChange} />
      <AidRqAdminListWrapper />
    </PageWrapper>
  );
};

export default AdminAidRqListPage;
