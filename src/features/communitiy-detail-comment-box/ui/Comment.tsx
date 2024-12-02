import { CommentCss } from './CommentCss';

const Comment = ({
  writer_id,
  content,
  updated_on,
  add_comment
}: {
  writer_id: string;
  content: string;
  updated_on: Date;
  add_comment: { writer_id: string; content: string; updated_on: Date }[];
}) => {
  return (
    <CommentCss>
      <div className="mainCommentWrap">
        <i className="writerId">{writer_id}</i>
        <p className="content">{content}</p>
        <div className="commentInnerWrap">
          <i className="createdDate">{updated_on.toLocaleDateString()}</i>
          <i className="editBtn">수정하기</i>
          <i className="deleteBtn">삭제하기</i>
        </div>
      </div>
      {add_comment.map((v) => (
        <div className="addComment">
          <i className="writerId">{v.writer_id}</i>
          <p className="content">{v.content}</p>
          <div className="commentInnerWrap">
            <i className="createdDate">{v.updated_on.toLocaleDateString()}</i>
            <i className="editBtn">수정하기</i>
            <i className="deleteBtn">삭제하기</i>
          </div>
        </div>
      ))}
    </CommentCss>
  );
};
export default Comment;
