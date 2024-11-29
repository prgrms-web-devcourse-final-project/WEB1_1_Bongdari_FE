import AidRqCategoryLabel from '@/components/label/AidRqCategoryLabel';
import { Wrapper, LabelContainer, Title, Text, Center } from './indexCss';
import AidRqCertifiedLabel from '@/components/label/AidRqCertifiedLabel';

interface TopProps {
  title: string;
  content: string;
  center: {
    name: string;
  };
}
const Top = ({ title, content, center }: TopProps) => {
  return (
    <Wrapper>
      <LabelContainer>
        <AidRqCategoryLabel text="도서관"></AidRqCategoryLabel>
        <AidRqCertifiedLabel></AidRqCertifiedLabel>
      </LabelContainer>
      <Title>{title}</Title>
      <Text>{content}</Text>
      <Center>{center.name}</Center>
    </Wrapper>
  );
};

export default Top;
