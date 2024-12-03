import AidRqCategoryLabel from '@/components/label/AidRqCategoryLabel';
import { Wrapper, LabelContainer, Title, Text, Center } from './indexCss';
import AidRqCertifiedLabel from '@/components/label/AidRqCertifiedLabel';

interface TopProps {
  title: string;
  content: string;
  center: {
    name: string;
  };
  category: string;
  admitted: boolean;
}
const Top = ({ title, content, center, category, admitted }: TopProps) => {
  return (
    <Wrapper>
      <LabelContainer>
        <AidRqCategoryLabel text={category}></AidRqCategoryLabel>
        {admitted && <AidRqCertifiedLabel></AidRqCertifiedLabel>}
      </LabelContainer>
      <Title>{title}</Title>
      <Text>{content}</Text>
      <Center>{center.name}</Center>
    </Wrapper>
  );
};

export default Top;
