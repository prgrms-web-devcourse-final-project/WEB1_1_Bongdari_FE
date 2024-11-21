import AidRqCategoryLabel from '@/components/label/AidRqCategoryLabel';
import { Wrapper, LabelContainer, Title, Text, Center } from './indexCss';
import AidRqCertifiedLabel from '@/components/label/AidRqCertifiedLabel';

const Top = () => {
  return (
    <Wrapper>
      <LabelContainer>
        <AidRqCategoryLabel text="도서관"></AidRqCategoryLabel>
        <AidRqCertifiedLabel></AidRqCertifiedLabel>
      </LabelContainer>
      <Title>서울도서관 사서도우미 모집 서울도서관 사서도우미 모집</Title>
      <Text>
        사서도우미 3명 모집사서도우미 3명 모집사서도우미 3명 모집 사서도우미 3명 모집사서도우미 3명 모집사서도우미 3명
        모집사서도우미 3명 모집사서도우미 3명 모집 사서도우미 3명 모집사서도우미 3명 모집
      </Text>
      <Center>서울도서관</Center>
    </Wrapper>
  );
};

export default Top;
