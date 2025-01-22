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
    allowedTags: ['p'], // p 태그만 허용하기
    allowedAttributes: {} // 어떤 요소도 허용 x
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
