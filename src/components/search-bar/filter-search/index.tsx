import { useLocation } from 'react-router-dom';

import FilterBox from './ui/filter-box';
import InputBox from '@/components/inputBox';
import { Wrapper } from './indexCss';
import useSearchStore from '@/store/stores/search/searchStore';
import useAdminSearchStore from '@/store/stores/admin-search/searchStore';

interface FilterSearchBarProps {
  searchAidRequests: () => void;
}

const FilterSearchBar: React.FC<FilterSearchBarProps> = ({ searchAidRequests }) => {
  //페이지에 따른 store처리
  const location = useLocation();
  const isAidrqlist = location.pathname === '/aidrqlist';
  const searchSetState = useSearchStore((state) => state.setSearchState);
  const adminSetState = useAdminSearchStore((state) => state.setSearchState);
  const setSearchState = isAidrqlist ? searchSetState : adminSetState;

  return (
    <Wrapper>
      <InputBox
        getInputText={(text: string) => {
          setSearchState({
            keyword: text
          });
        }}
        // inputBox 고쳐주세요!!
        // height="57px"
        // borderRadius="8px"
        colortype="white"
        placeholder="검색어를 입력해주세요."></InputBox>
      <FilterBox setSearchState={setSearchState} searchAidRequests={searchAidRequests}></FilterBox>
    </Wrapper>
  );
};
export default FilterSearchBar;
