import { useState } from 'react';
import { commentType } from '@/shared/types/community-type/CommuntiyTypes';
import {
  useCommunityComments,
  usePostCommunityComment
} from '@/store/queries/community-detail-common-query/useCommunityComment';
import { useMyProfile } from '@/store/queries/volunteer-mypage/useFetchMyData';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';

interface useCommunityCommentReturn {
  commentData: commentType[] | undefined;
  commentCount: number;
  commentText: string;
  loginName: string;
  setCommentText: (text: string) => void;
  onEventPost: () => void;
}

export const useCommunityComment = (content_id: number): useCommunityCommentReturn => {
  const { openAlert } = useAlertDialog();
  const [commentText, setCommentText] = useState<string>('');
  const { mutate: postComment } = usePostCommunityComment();

  // Fetch comments using React Query
  const { data: comments } = useCommunityComments(content_id);
  const commentData = comments?.content ?? [];
  const commentCount = commentData.length;

  // Fetch login user's name
  const { data: profileData } = useMyProfile();
  const loginName = profileData?.nickname ?? '';
  // const loginName = 'a431d0d4';

  const onEventPost = () => {
    if (!commentText) return;

    if (commentText.length > 200) {
      openAlert('댓글은 200자를 초과할 수 없습니다.');
      return;
    }

    postComment(
      {
        content_id,
        content: commentText
      },
      {
        onSuccess: () => {
          setCommentText('');
        }
      }
    );
  };

  return { commentData, commentCount, commentText, loginName, setCommentText, onEventPost };
};
