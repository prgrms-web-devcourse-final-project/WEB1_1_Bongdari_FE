import { Content, ExpectedRecruit, TextContentContainer } from './indexCss';
import SanitizedContent from '@/components/sanitized-content';

interface TextContentProps {
  content: string;
  recruitmentCount: number;
}
const TextContent = ({ content, recruitmentCount }: TextContentProps) => {
  return (
    <TextContentContainer>
      <Content>
        <SanitizedContent content={content} />
      </Content>
      <ExpectedRecruit>예상 모집 인원: {recruitmentCount}명</ExpectedRecruit>
    </TextContentContainer>
  );
};

export default TextContent;
