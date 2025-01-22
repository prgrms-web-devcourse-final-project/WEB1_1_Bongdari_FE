import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';
import { Content, ExpectedRecruit, TextContentContainer } from './indexCss';

interface TextContentProps {
  content: string;
  recruitmentCount: number;
}
const TextContent = ({ content, recruitmentCount }: TextContentProps) => {
  const sanitizedContent = sanitizeHtml(content, {
    allowedTags: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'img',
      'br',
      'b',
      'strong',
      'em',
      'ul',
      'ol',
      'li',
      'a',
      'span'
    ],
    allowedAttributes: {
      '*': ['style'], // 모든 태그에 style 속성 허용
      a: ['href', 'target'],
      img: ['src', 'alt']
    },
    allowedStyles: {
      '*': {
        color: [/.*/],
        'background-color': [/.*/],
        'font-size': [/.*/],
        'text-align': [/.*/]
      }
    }
  });
  return (
    <TextContentContainer>
      <Content>{parse(sanitizedContent)}</Content>
      <ExpectedRecruit>예상 모집 인원: {recruitmentCount}명</ExpectedRecruit>
    </TextContentContainer>
  );
};

export default TextContent;
