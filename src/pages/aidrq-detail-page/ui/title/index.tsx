import AidRqCategoryLabel from '@/components/label/AidRqCategoryLabel';
import { CreatedAt, LabelBox, TitleBox, Wrapper } from './indexCss';
import AidRqCertifiedLabel from '@/components/label/AidRqCertifiedLabel';
import AidRqStateLabel from '@/components/label/AidRqStateLabel';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';
import useDateFormat from '@/shared/hooks/useDateFormat';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const Title: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  const { formatDate } = useDateFormat();
  return (
    <Wrapper>
      <LabelBox>
        <AidRqCategoryLabel text={data.volunteer_category}></AidRqCategoryLabel>
        {data.admitted && <AidRqCertifiedLabel></AidRqCertifiedLabel>}
      </LabelBox>
      <TitleBox>
        <h2>{data.title}</h2>
        <AidRqStateLabel
          state={
            data.recruit_status === 'RECRUITING' ? '모집중' : data.recruit_status === 'CLOSED' ? '모집완료' : '종료'
          }></AidRqStateLabel>
      </TitleBox>
      <CreatedAt>등록 일자 : {formatDate(data.created_at)}</CreatedAt>
    </Wrapper>
  );
};

export default Title;
