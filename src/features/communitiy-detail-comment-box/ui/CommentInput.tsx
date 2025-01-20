import { ApplyButton, CommentInputCss } from './CommentInputCss';
import InputBox from '@/components/inputBox';

const CommentInput = ({
  commentText,
  setCommentText,
  onEventPost,
  disabled = false
}: {
  commentText: string;
  setCommentText: (text: string) => void;
  onEventPost: () => void;
  disabled?: boolean;
}) => {
  return (
    <CommentInputCss>
      <InputBox
        colortype="white"
        value={commentText}
        setFunc={setCommentText}
        onEnterFunc={onEventPost}
        disabled={disabled}
      />
      <ApplyButton label="댓글 등록" type="white" onClick={onEventPost} disabled={disabled} />
    </CommentInputCss>
  );
};
export default CommentInput;
