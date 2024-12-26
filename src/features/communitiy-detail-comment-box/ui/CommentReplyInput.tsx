import { CommentCss } from './CommentCss';
import { useCommentReplyInput } from './logic/useCommentReplyInput';

interface CommentReplyInputProps {
  content_id: number;
  parent_comment_id: number;
  isAddReply: boolean;
  setIsAddReply: (bool: boolean) => void;
}
const CommentReplyInput = ({ content_id, parent_comment_id, isAddReply, setIsAddReply }: CommentReplyInputProps) => {
  const { textareaRef, handleTextboxHeight, commentText, setCommentText, onEventPost } = useCommentReplyInput({
    isAddReply,
    setIsAddReply,
    content_id,
    parent_comment_id
  });
  return (
    <CommentCss className="replyInput">
      <textarea
        className="content"
        ref={textareaRef}
        onInput={handleTextboxHeight}
        value={commentText}
        onChange={(ev) => setCommentText(ev.target.value)}
      />
      <div className="commentInnerWrap">
        <i className="editBtn" onClick={onEventPost}>
          작성완료
        </i>
        <i className="deleteBtn" onClick={() => setIsAddReply(false)}>
          취소
        </i>
      </div>
    </CommentCss>
  );
};
export default CommentReplyInput;
