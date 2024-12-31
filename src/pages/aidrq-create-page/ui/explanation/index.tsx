import { Wrapper, CreateTextArea } from './indexCss';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';

interface ExplanationProps {
  getTitleAndFilter: (key: keyof VolunteerType, value: string) => void;
}

const Explanation: React.FC<ExplanationProps> = ({ getTitleAndFilter }) => {
  return (
    <Wrapper>
      <p>본문 내용</p>
      <CreateTextArea
        getInputText={(text) => {
          getTitleAndFilter('content', text);
        }}
        colortype="white"></CreateTextArea>
    </Wrapper>
  );
};

export default Explanation;
