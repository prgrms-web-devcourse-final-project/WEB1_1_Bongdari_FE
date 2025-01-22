import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';
import { RecruitCount, Text, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const TextContent: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  const sanitizedContent = sanitizeHtml(data.content, {
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
    <Wrapper>
      <div>
        <Text>{parse(sanitizedContent)}</Text>
      </div>
      <RecruitCount>예상 모집 인원 : {data.recruitment_count}명</RecruitCount>
    </Wrapper>
  );
};

export default TextContent;
