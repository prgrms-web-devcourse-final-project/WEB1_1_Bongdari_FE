import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';
import AidRqCategoryLabel from '@/components/label/AidRqCategoryLabel';
import { Wrapper, LabelContainer, Title, Text, Center } from './indexCss';
import AidRqCertifiedLabel from '@/components/label/AidRqCertifiedLabel';

interface TopProps {
  title: string;
  content: string;
  center?: {
    name?: string;
  };
  category: string;
  admitted: boolean;
}

const Top = ({ title, content, center, category, admitted }: TopProps) => {
  const sanitizedContent = sanitizeHtml(content, {
    allowedTags: ['p', 'img', 'br', 'b', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'span'],
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
      <LabelContainer>
        <AidRqCategoryLabel text={category}></AidRqCategoryLabel>
        {admitted && <AidRqCertifiedLabel></AidRqCertifiedLabel>}
      </LabelContainer>
      <Title>{title}</Title>
      <Text>{parse(sanitizedContent)}</Text>
      <Center>{center?.name}</Center>
    </Wrapper>
  );
};

export default Top;
