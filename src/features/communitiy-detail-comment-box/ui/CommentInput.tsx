import { ApplyButton, CommentInputCss } from './CommentInputCss';
import InputBox from '@/components/inputBox';

const CommentInput = ({
  commentText,
  setCommentText,
  onEventPost
}: {
  commentText: string;
  setCommentText: (text: string) => void;
  onEventPost: () => void;
}) => {
  return (
    <CommentInputCss>
      <InputBox
        colortype={0}
        width="100%"
        value={commentText}
        getInputText={setCommentText}
        setFunc={setCommentText}
        onEnterFunc={onEventPost}
      />
      <ApplyButton label="댓글 등록" type="white" onClick={onEventPost} />
    </CommentInputCss>
  );
};
export default CommentInput;
