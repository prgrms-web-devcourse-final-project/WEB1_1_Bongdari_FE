import InputBox from '@/components/inputBox';
import { Wrapper } from './indexCss';
import SelectContainer from './ui/select-container';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import aidrqCategoryMapping from '@/shared/mapping/aidrq-category-mapping';

interface AidRqCreateSharedProps {
  getTitleAndFilter: (key: keyof VolunteerType, value: string | number | boolean) => void;
  volunteerData: VolunteerType;
}

const AidRqCreateShared: React.FC<AidRqCreateSharedProps> = ({ getTitleAndFilter, volunteerData }) => {
  return (
    <Wrapper>
      <p>제목</p>
      <InputBox
        key={volunteerData.title}
        getInputText={(text) => {
          getTitleAndFilter('title', text);
        }}
        initialVal={volunteerData.title}
        colortype={0}
        placeholder="제목을 입력해주세요."
        width="100%"
      />
      <SelectContainer
        volunteerData={volunteerData}
        getSelectedType={(text) => {
          getTitleAndFilter('volunteer_category', aidrqCategoryMapping[text]);
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
