import NonFilterSearchBar from '@/components/search-bar/nonfilter-search';
import { Wrapper } from './indexCss';
import CommuntiyList from '@/features/community-list';

export default function CommunityListPage() {
  return (
    <Wrapper>
      <div className="innerWrap">
        <i className="title">커뮤니티</i>
        <NonFilterSearchBar type={true} />
        <CommuntiyList />
      </div>
    </Wrapper>
  );
}
