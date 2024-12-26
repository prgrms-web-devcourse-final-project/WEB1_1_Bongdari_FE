import { CommentCss } from './CommentCss';
import { commentType } from '@/shared/types/community-type/CommuntiyTypes';
import useDateFormat from '@/shared/hooks/useDateFormat';
import { useComment } from './logic/useComment';
import CommentReplyInput from './CommentReplyInput';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';

const Comment = ({
  id,
  writer_nickname,
  content,
  updated_at,
  replies,
  content_id,
  isReply = false,
  login_name
}: {
  id: number;
  writer_nickname: string;
  content: string;
  updated_at: string;
  replies: commentType[];
  content_id: number;
  isReply?: boolean;
  login_name: string;
}) => {
  const {
    isMyComment,
    textareaRef,
    handleTextboxHeight,
    commentText,
    setCommentText,
    isEditState,
    setIsEditState,
    isAddReply,
    setIsAddReply,
    onClickEditComment,
    onClickDeleteComment
  } = useComment({ content, content_id, comment_id: id, writer_nickname, login_name });

  const { formatDateTime } = useDateFormat();
  const { openAlert } = useAlertDialog();

  const handleDeleteClick = () => {
    openAlert('댓글이 삭제되었습니다');
    onClickDeleteComment(); // 삭제 함수 호출
  };

  const handleEditClick = () => {
    openAlert('댓글 수정되었습니다');
    onClickEditComment(); // 수정 함수 호출
  };

  if (!isReply) {
    return (
      <CommentCss>
        <div className={'mainCommentWrap'}>
          <i className="writerId">{writer_nickname}</i>
          <textarea
            className="content"
            ref={textareaRef}
            onInput={handleTextboxHeight}
            disabled={!isEditState}
            value={commentText}
            onChange={(ev) => setCommentText(ev.target.value)}
          />
          <div className="commentInnerWrap">
            <i className="createdDate">{formatDateTime(updated_at)}</i>
            <i className="replyBtn" onClick={() => setIsAddReply(true)}>
              댓글달기
            </i>
            {isMyComment ? (
              !isEditState ? (
                <>
                  <i className="editBtn" onClick={() => setIsEditState(true)}>
                    수정하기
                  </i>
                  <i className="deleteBtn" onClick={handleDeleteClick}>
                    삭제하기
                  </i>
                </>
              ) : (
                <>
                  <i className="editBtn" onClick={handleEditClick}>
                    수정완료
                  </i>
                  <i className="deleteBtn" onClick={() => setCommentText(content)}>
                    취소
                  </i>
                </>
              )
            ) : (
              ''
            )}
          </div>
        </div>
        {isAddReply ? (
          <CommentReplyInput
            content_id={content_id}
            parent_comment_id={id}
            isAddReply={isAddReply}
            setIsAddReply={setIsAddReply}
          />
        ) : (
          ''
        )}

        <div className={'replyCommentWrap'}>
          {replies.map((v, i) => (
            <Comment key={i} {...v} isReply={true} content_id={content_id} login_name={login_name} />
          ))}
        </div>
      </CommentCss>
    );
  } else {
    return (
      <CommentCss>
        <i className="writerId">{writer_nickname}</i>
        <textarea
          className="content"
          ref={textareaRef}
          onInput={handleTextboxHeight}
          disabled={!isEditState}
          value={commentText}
          onChange={(ev) => setCommentText(ev.target.value)}
        />
        <div className="commentInnerWrap">
          <i className="createdDate">{formatDateTime(updated_at)}</i>
          {isMyComment ? (
            <i className="deleteBtn" onClick={handleDeleteClick}>
              삭제하기
            </i>
          ) : (
            ''
          )}
        </div>
      </CommentCss>
    );
  }
};

export default Comment;
