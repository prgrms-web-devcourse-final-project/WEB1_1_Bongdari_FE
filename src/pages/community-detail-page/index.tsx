import CommunityDetailContentBox from '@/features/communitiy-detail-content-box';
import { Wrapper } from './indexCss';
import CommunityDetailCommentBox from '@/features/communitiy-detail-comment-box';
import { useParams } from 'react-router-dom';

const CommunityDetailPage = () => {
  const { content_id } = useParams();
  return (
    <Wrapper>
      <CommunityDetailContentBox content_id={Number(content_id)} />
      <CommunityDetailCommentBox />
    </Wrapper>
  );
};
export default CommunityDetailPage;
