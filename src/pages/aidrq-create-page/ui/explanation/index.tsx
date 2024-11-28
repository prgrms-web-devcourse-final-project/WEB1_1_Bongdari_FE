import TextArea from '@/components/textArea';
import { Wrapper } from './indexCss';

const Explanation = () => {
  return (
    <Wrapper>
      <p>본문 내용</p>
      <TextArea
        getInputText={(text) => {
          console.log(text);
        }}
        colortype={0}
        width="100%"
        height="500px"></TextArea>
    </Wrapper>
  );
};

export default Explanation;
