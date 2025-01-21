import { CommunityDetailCommentBoxCss } from './indexCss';
import { useCommunityComment } from './logic/useCommunityComment';
import CommentInput from './ui/CommentInput';
import Comment from './ui/Comment';
import { useLoginStore } from '@/store/stores/login/loginStore';

const CommunityDetailCommentBox = ({ content_id }: { content_id: number }) => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const { commentData, commentCount, commentText, loginName, setCommentText, onEventPost } =
    useCommunityComment(content_id);

  return (
    <CommunityDetailCommentBoxCss>
      <i className="title">{`댓글 (${commentCount})`}</i>
      <CommentInput
        commentText={commentText}
        setCommentText={setCommentText}
        onEventPost={onEventPost}
        disabled={!isLoggedIn}
      />
      <div className="commentWrap">
        {commentData?.map((v, i) => <Comment key={i} {...v} content_id={content_id} login_name={loginName} />)}
      </div>
    </CommunityDetailCommentBoxCss>
  );
};
export default CommunityDetailCommentBox;
