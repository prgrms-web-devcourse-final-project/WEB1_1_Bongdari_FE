import FilterSearchBar from '@/components/search-bar/filter-search';
import FindVolunteer from './_components/findVolunteer';
import { PageWrapper } from './indexCss';

const AdminAidRqListPage = () => {
  const handleSearchAidRequests = () => {
    // api 호출 로직 와야 함
    console.log('요청 검색 실행');
  };
  return (
    <PageWrapper>
      <h1>내가 등록한 도움요청 글</h1>
      <FindVolunteer />
      <FilterSearchBar searchAidRequests={handleSearchAidRequests} />
      <div>글 리스트 feature로 만들어야 함</div>
    </PageWrapper>
  );
};

export default AdminAidRqListPage;
