import FilterBox from './ui/filter-box';
import InputBox from '@/components/inputBox';
import testFunc from './logic/testFunc';
import { Wrapper } from './indexCss';

const FilterSearchBar = () => {
  return (
    <Wrapper>
      <InputBox
        getInputText={testFunc}
        width="100%"
        height="57px"
        borderradius="8px"
        colortype={0}
        placeholder="검색어를 입력해주세요."></InputBox>
      <FilterBox></FilterBox>
    </Wrapper>
  );
};
export default FilterSearchBar;
