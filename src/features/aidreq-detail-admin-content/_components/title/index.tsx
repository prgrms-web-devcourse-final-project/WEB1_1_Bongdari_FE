import AidRqCategoryLabel from '@/components/label/AidRqCategoryLabel';
import AidRqCertifiedLabel from '@/components/label/AidRqCertifiedLabel';
import AidRqStateLabel from '@/components/label/AidRqStateLabel';
import { ContentTitle, CurrentEdit, LabelContainer, TitleContainer } from './indexCss';
import useDateFormat from '@/shared/hooks/useDateFormat';

interface TitleProps {
  title: string;
  updateAt: string;
  category: string;
  status: string;
}

const Title = ({ title, updateAt, category, status }: TitleProps) => {
  const { formatDate } = useDateFormat();
  return (
    <div>
      <LabelContainer>
        <AidRqCategoryLabel text={category} />
        <AidRqCertifiedLabel />
      </LabelContainer>
      <TitleContainer>
        <ContentTitle>{title}</ContentTitle>
        <AidRqStateLabel state={status} />
      </TitleContainer>
      <CurrentEdit>{formatDate(updateAt)}</CurrentEdit>
    </div>
  );
};

export default Title;
