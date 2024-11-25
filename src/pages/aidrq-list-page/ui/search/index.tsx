import FilterSearchBar from '@/components/search-bar/filter-search';
import { Wrapper } from './indexCss';
import { useInfiniteAidRq } from '@/shared/hooks/useInfiniteAidRq';

const Search = () => {
  const { searchAidRequests } = useInfiniteAidRq();
  return (
    <Wrapper>
      <FilterSearchBar searchAidRequests={searchAidRequests}></FilterSearchBar>
    </Wrapper>
  );
};

export default Search;
