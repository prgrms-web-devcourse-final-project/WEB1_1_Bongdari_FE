import { usePostCommunityComment } from '@/store/queries/community-detail-common-query/useCommunityComment';
import { useEffect, useRef, useState } from 'react';

interface useCommentReplyInputProps {
  isAddReply: boolean;
  setIsAddReply: (bool: boolean) => void;
  content_id: number;
  parent_comment_id: number;
  updateComments?: () => void;
}

interface useCommentReplyInputReturn {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  handleTextboxHeight: () => void;
  commentText: string;
  setCommentText: (text: string) => void;
  onEventPost: () => void;
}

export const useCommentReplyInput = ({
  isAddReply,
  setIsAddReply,
  content_id,
  parent_comment_id
}: useCommentReplyInputProps): useCommentReplyInputReturn => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [commentText, setCommentText] = useState<string>('');
  const { mutate: postComment } = usePostCommunityComment();

  // 대댓글 post
  const onEventPost = async () => {
    if (!commentText.trim()) return;

    postComment(
      {
        content_id,
        content: commentText,
        parent_id: parent_comment_id
      },
      {
        onSuccess: () => {
          setCommentText(''); // 댓글 입력 필드 초기화
          setIsAddReply(false);
          console.log('댓글 작성 성공!');
        },
        onError: (error) => {
          console.error('댓글 작성 실패:', error);
        }
      }
    );
  };

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

  // 댓글달기 누르면 대댓글 textarea로 focus
  useEffect(() => {
    if (isAddReply && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isAddReply]);

  return {
    textareaRef,
    handleTextboxHeight,
    commentText,
    setCommentText,
    onEventPost
  };
};
