import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { resType } from '@/shared/types/resType';

// 댓글 조회
const fetchCommunityComment = async (content_id: number) => {
  const res = await axiosInstance.get(`/api/community-board/${content_id}/comments?sort=%5B%22DESC%22%5D`);
  return res.data;
};

export const useCommunityComments = (content_id: number) => {
  return useQuery({
    queryKey: ['communityComments', content_id],
    queryFn: () => fetchCommunityComment(content_id),
    staleTime: 1000 * 60 * 5 // 데이터 5분간 유효
  });
};

// 댓글 작성 함수
const postCommunityComment = async ({
  content_id,
  content,
  parent_id
}: {
  content_id: number;
  content: string;
  parent_id?: number;
}) => {
  const res: resType<number> = await axiosInstance.post(`/api/community-board/${content_id}/comment`, {
    content,
    parent_comment_id: parent_id
  });
  return res.data; // 이 값이 onSuccess의 첫 번째 매개변수로 전달됨
};

export const usePostCommunityComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCommunityComment,
    onSuccess: (_, variables) => {
      const { content_id } = variables;
      queryClient.invalidateQueries({ queryKey: ['communityComments', content_id] });
    },
    onError: (error) => {
      console.error('Failed to post comment:', error);
    }
  });
};

// 댓글 수정
const putCommunityComment = async ({
  content_id,
  comment_id,
  content
}: {
  content_id: number;
  comment_id: number;
  content: string;
}) => {
  const res: resType<number> = await axiosInstance.put(`/api/community-board/${content_id}/comment/${comment_id}`, {
    content
  });
  return res.data;
};

export const usePutCommunityComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putCommunityComment,
    onSuccess: (_, { content_id }) => {
      queryClient.invalidateQueries({ queryKey: ['communityComments', content_id] });
    },
    onError: (error) => {
      console.error('Failed to update comment:', error);
    }
  });
};

// 댓글 삭제
const deleteCommunityComment = async ({ content_id, comment_id }: { content_id: number; comment_id: number }) => {
  const res: resType<string> = await axiosInstance.delete(`/api/community-board/${content_id}/comment/${comment_id}`);
  return res.data;
};

export const useDeleteCommunityComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCommunityComment,
    onSuccess: (_, { content_id }) => {
      queryClient.invalidateQueries({ queryKey: ['communityComments', content_id] });
    },
    onError: (error) => {
      console.error('Failed to delete comment:', error);
    }
  });
};
