import { RecruitCount, Text, Wrapper } from './indexCss';
import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface AidRqDetailCenterProfileProps {
  data: AidRqDetailType;
}

const TextContent: React.FC<AidRqDetailCenterProfileProps> = ({ data }) => {
  return (
    <Wrapper>
      <div>
        <Text>{data.content}</Text>
      </div>
      <RecruitCount>예상 모집 인원 : {data.current_recruitment_count}명</RecruitCount>
    </Wrapper>
  );
};

export default TextContent;
