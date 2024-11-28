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
        getInputText={(text) => {
          getTitleAndFilter('content', text);
        }}
        colortype={0}
        width="100%"
        height="500px"></TextArea>
    </Wrapper>
  );
};

export default Explanation;
