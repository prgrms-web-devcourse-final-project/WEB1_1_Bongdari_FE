import AidRqCategoryLabel from '@/components/label/AidRqCategoryLabel';
import AidRqCertifiedLabel from '@/components/label/AidRqCertifiedLabel';
import AidRqStateLabel from '@/components/label/AidRqStateLabel';
import { ContentTitle, CurrentEdit, LabelContainer, TitleContainer } from './indexCss';

const Title = () => {
  return (
    <div>
      <LabelContainer>
        <AidRqCategoryLabel text="도서관" />
        <AidRqCertifiedLabel />
      </LabelContainer>
      <TitleContainer>
        <ContentTitle>서울 도서관 사서 도우미 모집</ContentTitle>
        <AidRqStateLabel state="모집중" />
      </TitleContainer>
      <CurrentEdit>최근수정일</CurrentEdit>
    </div>
  );
};

export default Title;
