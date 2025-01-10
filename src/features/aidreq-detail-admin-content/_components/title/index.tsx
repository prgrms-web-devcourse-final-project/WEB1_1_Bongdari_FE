import AidRqCategoryLabel from '@/components/label/AidRqCategoryLabel';
import AidRqCertifiedLabel from '@/components/label/AidRqCertifiedLabel';
import AidRqStateLabel from '@/components/label/AidRqStateLabel';
import { ContentTitle, CurrentEdit, LabelContainer, TitleContainer, Wrapper } from './indexCss';
import useDateFormat from '@/shared/hooks/useDateFormat';
import { statusToKorean, type RecruitAPIState } from '@/shared/mapping/aid-recruit-status-mapping';

interface TitleProps {
  title: string;
  updateAt: string;
  category: string;
  status: RecruitAPIState;
  admitted: boolean;
}

const Title = ({ title, updateAt, category, status, admitted }: TitleProps) => {
  const { formatDate } = useDateFormat();
  return (
    <Wrapper>
      <LabelContainer>
        <AidRqCategoryLabel text={category} />
        {admitted && <AidRqCertifiedLabel />}
      </LabelContainer>
      <TitleContainer>
        <ContentTitle>{title}</ContentTitle>
        <AidRqStateLabel state={statusToKorean[status]} />
      </TitleContainer>
      <CurrentEdit>최근 수정일: {formatDate(updateAt)}</CurrentEdit>
    </Wrapper>
  );
};

export default Title;
