import { CommentInputCss } from './CommentInputCss';
import { SubmitButton } from '@/components/button';
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
      <SubmitButton label="댓글 등록" onClick={onEventPost} />
    </CommentInputCss>
  );
};
export default CommentInput;
