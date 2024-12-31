import TextArea from '@/components/textArea';
import { Wrapper } from './indexCss';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';

interface ExplanationProps {
  getTitleAndFilter: (key: keyof VolunteerType, value: string) => void;
}

const Explanation: React.FC<ExplanationProps> = ({ getTitleAndFilter }) => {
  return (
    <Wrapper>
      <p>본문 내용</p>
      <TextArea
        // TextArea 고쳐주세요!!
        // height="500px"
        getInputText={(text) => {
          getTitleAndFilter('content', text);
        }}
        colortype="white"></TextArea>
    </Wrapper>
  );
};

export default Explanation;
