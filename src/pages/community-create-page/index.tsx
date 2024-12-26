import CommunityCreateBox from '@/features/community-create-box';
import { Wrapper } from './indexCss';
import { useParams } from 'react-router-dom';

const CommunityCreatePage = () => {
  const { content_id } = useParams();
  console.log('ci', content_id);

  return (
    <Wrapper>
      <i className="title">커뮤니티 글 작성</i>
      <CommunityCreateBox content_id={content_id ? Number(content_id) : undefined}></CommunityCreateBox>
    </Wrapper>
  );
};
export default CommunityCreatePage;
