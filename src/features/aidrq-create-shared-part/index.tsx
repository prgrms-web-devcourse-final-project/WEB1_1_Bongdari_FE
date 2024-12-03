import InputBox from '@/components/inputBox';
import { Wrapper } from './indexCss';
import SelectContainer from './ui/select-container';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';

interface AidRqCreateSharedProps {
  getTitleAndFilter: (key: keyof VolunteerType, value: string | number | boolean) => void;
}

const AidRqCreateShared: React.FC<AidRqCreateSharedProps> = ({ getTitleAndFilter }) => {
  return (
    <Wrapper>
      <p>제목</p>
      <InputBox
        getInputText={(text) => {
          getTitleAndFilter('title', text);
        }}
        colortype={0}
        placeholder="제목을 입력해주세요."
        width="100%"
      />
      <SelectContainer
        getSelectedType={(text) => {
          getTitleAndFilter('volunteer_category', text);
        }}
        getSelectedRegion={(text) => {
          getTitleAndFilter('region', text);
        }}
        getSelectedCertification={(text) => {
          if (text === '인증') {
            getTitleAndFilter('admitted', true);
          } else if (text === '미인증') {
            getTitleAndFilter('admitted', false);
          }
        }}
      />
    </Wrapper>
  );
};

export default AidRqCreateShared;
