import parse from 'html-react-parser';
import { Content, ExpectedRecruit, TextContentContainer } from './indexCss';

interface TextContentProps {
  content: string;
  recruitmentCount: number;
}
const TextContent = ({ content, recruitmentCount }: TextContentProps) => {
  return (
    <TextContentContainer>
      <Content>{parse(content)}</Content>
      <ExpectedRecruit>예상 모집 인원: {recruitmentCount}명</ExpectedRecruit>
    </TextContentContainer>
  );
};

export default TextContent;
