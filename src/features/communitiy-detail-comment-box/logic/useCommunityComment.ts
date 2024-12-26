import { useState } from 'react';
import { commentType } from '@/shared/types/community-type/CommuntiyTypes';
// import { useLoginStore } from '@/store/stores/login/loginStore';
import {
  useCommunityComments,
  usePostCommunityComment
} from '@/store/queries/community-detail-common-query/useCommunityComment';

interface useCommunityCommentReturn {
  commentData: commentType[] | undefined;
  commentCount: number;
  commentText: string;
  loginName: string;
  setCommentText: (text: string) => void;
  onEventPost: () => void;
}

export const useCommunityComment = (content_id: number): useCommunityCommentReturn => {
  const [commentText, setCommentText] = useState<string>('');
  // const myLoginId = useLoginStore((state) => state.myLoginId);
  // const loginType = useLoginStore((state) => state.loginType);

  // Fetch comments using React Query
  const { data: comments } = useCommunityComments(content_id);
  const commentData = comments?.content ?? [];
  const commentCount = commentData.length;

  // Fetch login user's name
  // const { data: profileData } = useFetchMyProfile();
  // const loginName = profileData?.nickname ?? '';
  const loginName = 'a431d0d4';

  // Post comment using React Query
  const { mutate: postComment } = usePostCommunityComment();

  const onEventPost = () => {
    if (!commentText) return;

    postComment(
      {
        content_id,
        content: commentText
      },
      {
        onSuccess: () => {
          // 댓글 등록 후 댓글 목록 새로고침
          setCommentText('');
        }
      }
    );
  };

  return { commentData, commentCount, commentText, loginName, setCommentText, onEventPost };
};
