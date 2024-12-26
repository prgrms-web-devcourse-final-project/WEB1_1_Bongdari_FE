import {
  useDeleteCommunityComment,
  usePutCommunityComment
} from '@/store/queries/community-detail-common-query/useCommunityComment';
import { useEffect, useRef, useState } from 'react';

interface useCommentProps {
  content: string;
  content_id: number;
  comment_id: number;
  writer_nickname: string;
  login_name: string;
}

interface useCommentReturn {
  isMyComment: boolean;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  handleTextboxHeight: () => void;
  commentText: string;
  setCommentText: (text: string) => void;
  isEditState: boolean;
  setIsEditState: (state: boolean) => void;
  isAddReply: boolean;
  setIsAddReply: (state: boolean) => void;
  onClickEditComment: () => void;
  onClickDeleteComment: () => void;
}

export const useComment = ({
  content,
  content_id,
  comment_id,
  writer_nickname,
  login_name
}: useCommentProps): useCommentReturn => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [commentText, setCommentText] = useState<string>(content);
  const [isEditState, setIsEditState] = useState<boolean>(false);
  const [isAddReply, setIsAddReply] = useState<boolean>(false);
  const [isMyComment, setIsMyComment] = useState<boolean>(false);
  const { mutate: putComment } = usePutCommunityComment();
  const { mutate: deleteComment } = useDeleteCommunityComment();

  // 내가 쓴 댓글인지 확인
  useEffect(() => {
    console.log('[댓글 writer_nickname:', writer_nickname, '], [login_name:', login_name, ']');
    setIsMyComment(writer_nickname === login_name);
  }, [login_name]);

  // commentText가 길어지면 textarea 높이 조정
  const handleTextboxHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // 높이 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 10}px`; // 내용물 높이에 맞춤
    }
  };

  // 댓글 내용이 바뀔 때마다 텍스트 박스 높이 조정
  useEffect(() => {
    handleTextboxHeight();
  }, [commentText]);

  // 수정하기 누르면 textarea로 focus
  useEffect(() => {
    if (isEditState && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditState]);

  // 작성완료 클릭시 댓글 수정(PUT)
  const onClickEditComment = () => {
    if (commentText === content) return;

    putComment(
      { content_id, comment_id, content: commentText },
      {
        onSuccess: () => {
          setIsEditState(false); // 수정 모드 종료
        },
        onError: (error) => {
          console.error('댓글 수정 실패:', error);
        }
      }
    );
  };

  // 삭제하기 클릭시 댓글 삭제(DELETE)
  const onClickDeleteComment = () => {
    deleteComment(
      { content_id, comment_id },
      {
        onSuccess: () => {
          setIsEditState(false); // 수정 모드 종료
        },
        onError: (error) => {
          console.error('댓글 삭제 실패:', error);
        }
      }
    );
  };

  return {
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
  };
};
