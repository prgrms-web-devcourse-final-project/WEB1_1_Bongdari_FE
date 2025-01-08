import { Wrapper } from './indexCss';
import CommuntiyList from '@/features/community-list';
import NonFilterSearchBar from '@/components/search-bar/nonfilter-search';

export default function CommunityListPage() {
  return (
    <Wrapper>
      <div className="innerWrap">
        <i className="title">커뮤니티</i>
        <NonFilterSearchBar />
        <CommuntiyList />
      </div>
    </Wrapper>
  );
}
