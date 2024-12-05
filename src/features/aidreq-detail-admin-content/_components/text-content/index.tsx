import { Content, ExpectedRecruit, TextContentContainer } from './indexCss';

interface TextContentProps {
  content: string;
  recruitmentCount: number;
}
const TextContent = ({ content, recruitmentCount }: TextContentProps) => {
  return (
    <TextContentContainer>
      <Content>{content}</Content>
      <ExpectedRecruit>예상 모집 인원: {recruitmentCount}명</ExpectedRecruit>
    </TextContentContainer>
  );
};

export default TextContent;
