import { Wrapper, SelectWrapper } from './indexCss';
import { OtherButton } from '@/components/button';
import Select from '@/components/select';
import theme from '@/styles/theme';

interface FilterBoxProps {
  setSearchState: (state: {
    keyword?: string;
    type?: string;
    region?: string;
    admitted?: string;
    sort?: string;
  }) => void;
  searchAidRequests: () => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({ setSearchState, searchAidRequests }) => {
  return (
    <Wrapper>
      <SelectWrapper>
        <Select
          text="활동 유형을 입력해주세요."
          width="100%"
          data={['도서관', '양로원', '농촌봉사']}
          getSelectedOption={(option: string) => {
            setSearchState({
              type: option
            });
          }}></Select>
        <Select
          text="지역을 입력해주세요."
          width="100%"
          data={['서울특별시', '경기도', '강원도']}
          getSelectedOption={(option: string) => {
            setSearchState({
              region: option
            });
          }}></Select>
        <Select
          text="시간 인증 여부를 입력해주세요."
          width="100%"
          data={['시간 인증', '시간 미인증']}
          getSelectedOption={(option: string) => {
            setSearchState({
              admitted: option
            });
          }}></Select>
      </SelectWrapper>
      <OtherButton
        onClick={searchAidRequests}
        label="검색하기"
        width="188px"
        border={`1px solid ${theme.pointColor.Regular}`}
        borderRadius="8px"
        bgColor={theme.pointColor.Regular}
        color="white"
        fontSize="16px"
        fontWeight="700"
        disabled={false}></OtherButton>
    </Wrapper>
  );
};
export default FilterBox;
