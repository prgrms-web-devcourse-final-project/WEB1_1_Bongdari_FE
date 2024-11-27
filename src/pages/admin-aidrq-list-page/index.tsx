import FilterSearchBar from '@/components/search-bar/filter-search';
import WriteAidReqButtonComponent from './_components/writeAidReqButtonComponent';
import { PageWrapper, Title } from './indexCss';
import TabButtonGroup from '@/components/tab-button';
import AidRqAdminListWrapper from './_components/aidrqlistadmin-wrapper';

const AdminAidRqListPage = () => {
  const tabs = [{ label: '모집중' }, { label: '모집완료' }, { label: '종료' }];

  const handleTabChange = () => {
    console.log('TODO: 실행함수 넣기');
  };

  const handleSearchAidRequests = () => {
    // api 호출 로직 와야 함
    console.log('요청 검색 실행');
  };

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
