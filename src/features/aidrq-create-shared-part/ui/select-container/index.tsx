import Select from '@/components/select';
import { SelectBox, Wrapper } from './indexCss';

interface SelectContainerProps {
  getSelectedType: (text: string) => void;
  getSelectedRegion: (text: string) => void;
  getSelectedCertification: (text: string) => void;
}

const SelectContainer: React.FC<SelectContainerProps> = ({
  getSelectedType,
  getSelectedRegion,
  getSelectedCertification
}) => {
  return (
    <Wrapper>
      <SelectBox>
        <p>활동유형</p>
        <Select
          text="활동유형을 선택해주세요."
          width="100%"
          height="50px"
          data={['도서관', '양로원', '농촌봉사']}
          getSelectedOption={(text) => {
            getSelectedType(text);
          }}></Select>
      </SelectBox>
      <SelectBox>
        <p>지역</p>
        <Select
          text="지역을 선택해주세요."
          width="100%"
          height="50px"
          data={['서울특별시', '인천광역시', '대전광역시']}
          getSelectedOption={(text) => {
            getSelectedRegion(text);
          }}></Select>
      </SelectBox>
      <SelectBox>
        <p>시간인증여부</p>
        <Select
          text="시간인증여부를 선택해주세요."
          width="100%"
          height="50px"
          data={['인증', '미인증']}
          getSelectedOption={(text) => {
            getSelectedCertification(text);
          }}></Select>
      </SelectBox>
    </Wrapper>
  );
};

export default SelectContainer;
