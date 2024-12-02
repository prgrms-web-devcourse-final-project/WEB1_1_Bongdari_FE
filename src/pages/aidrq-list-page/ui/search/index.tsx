import FilterSearchBar from '@/components/search-bar/filter-search';
import { Wrapper } from './indexCss';
import { useInfiniteAidRq } from '@/shared/hooks/useInfiniteAidRq';
import useSearchStore from '@/store/stores/search/searchStore';

const Search = () => {
  const { keyword, type, region, admitted, sort, status } = useSearchStore();

  const { searchAidRequests } = useInfiniteAidRq(keyword, type, region, admitted, sort, status);
  return (
    <Wrapper>
      <FilterSearchBar searchAidRequests={searchAidRequests}></FilterSearchBar>
    </Wrapper>
  );
};

export default Search;
