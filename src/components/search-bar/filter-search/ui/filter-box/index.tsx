import { Wrapper, SelectWrapper } from './indexCss';
import Select from '@/components/select';
import aidrqCategoryMapping from '@/shared/mapping/aidrq-category-mapping';
import regionMapping from '@/shared/mapping/aid-region-mapping';
import admittedMapping from '@/shared/mapping/aid-admitted-mapping';
import Button from '@/components/button';

interface FilterBoxProps {
  setSearchState: (state: {
    keyword?: string;
    category?: string;
    region?: null | string;
    admitted?: null | boolean;
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
          data={[
            '전체',
            '생활편의지원',
            '주거환경',
            '상담',
            '교육',
            '보건의료',
            '농어촌봉사',
            '문화행사',
            '환경보호',
            '행정보조',
            '안전예방',
            '공익인권',
            '재해재난',
            '멘토링',
            '기타'
          ]}
          getSelectedOption={(option: string) => {
            setSearchState({
              category: aidrqCategoryMapping[option]
            });
          }}></Select>
        <Select
          text="지역을 입력해주세요."
          width="100%"
          data={[
            '전체',
            '서울특별시',
            '경기도',
            '충청도',
            '강원도',
            '전라도',
            '경상도',
            '인천광역시',
            '대구광역시',
            '대전광역시',
            '광주광역시',
            '울산광역시',
            '부산광역시',
            '제주도'
          ]}
          getSelectedOption={(option: string) => {
            setSearchState({
              region: regionMapping[option]
            });
          }}></Select>
        <Select
          text="시간 인증 여부를 입력해주세요."
          width="100%"
          data={['전체', '시간 인증', '시간 미인증']}
          getSelectedOption={(option: string) => {
            setSearchState({
              admitted: admittedMapping[option]
            });
          }}></Select>
      </SelectWrapper>
      <Button
        onClick={searchAidRequests}
        label="검색하기"
        // width="188px"
        // border={`1px solid ${theme.pointColor.Regular}`}
        // borderRadius="8px"
        // bgColor={theme.pointColor.Regular}
        // color="white"
        // fontSize="16px"
        // fontWeight="700"
        disabled={false}></Button>
    </Wrapper>
  );
};
export default FilterBox;
