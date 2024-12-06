import NonFilterSearchBar from '@/components/search-bar/nonfilter-search';
import { Wrapper } from './indexCss';
import CommuntiyList from '@/features/community-list';
import { useState } from 'react';

export default function CommunityListPage() {
  const [searchWord, setSearchWord] = useState<string>('');

  return (
    <Wrapper>
      <div className="innerWrap">
        <i className="title">커뮤니티</i>
        <NonFilterSearchBar type={true} getInput={setSearchWord} />
        <CommuntiyList searchWord={searchWord} />
      </div>
    </Wrapper>
  );
}
