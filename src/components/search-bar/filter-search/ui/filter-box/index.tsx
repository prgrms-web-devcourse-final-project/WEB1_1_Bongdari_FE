import { Wrapper } from './indexCss';
import { OtherButton } from '@/components/button';
import Select from '@/components/select';
import theme from '@/styles/theme';

const FilterBox = () => {
  return (
    <Wrapper>
      <Select text="활동 유형을 입력해주세요." data={['도서관', '양로원', '농촌봉사']}></Select>
      <Select text="지역을 입력해주세요." data={['서울특별시', '경기도', '강원도']}></Select>
      <Select text="시간 인증 여부를 입력해주세요." data={['시간 인증', '시간 미인증']}></Select>
      <OtherButton
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
