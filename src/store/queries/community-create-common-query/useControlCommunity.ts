import axiosInstance from '@/api/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface CommunityData {
  title: string;
  content: string;
}

// 커뮤니티 게시글 등록
const postCommunity = async (communityPostData: CommunityData) => {
  const res = await axiosInstance.post('/api/community-board', communityPostData);

  return res.data;
};

export const usePostCommunity = (options?: {
  onSuccess?: (data: number) => void;
  onError?: (error: unknown) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCommunity,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['communityDetail'] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      console.error('Error posting community:', error);
      options?.onError?.(error);
      throw error;
    }
  });
};

// 커뮤니티 게시글 수정
const putCommunity = async (content_id: number, communityPutData: CommunityData) => {
  const res = await axiosInstance.put(`/api/community-board/${content_id}`, communityPutData);
  return res.data;
};

export const usePutCommunity = (options?: {
  onSuccess?: (data: number) => void;
  onError?: (error: unknown) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ content_id, communityPutData }: { content_id: number; communityPutData: CommunityData }) =>
      putCommunity(content_id, communityPutData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['communityDetail'] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      console.error('Error updating community:', error);
      options?.onError?.(error);
      throw error; // 다른 에러는 다시 throw
    }
  });
};

// 커뮤니티 삭제
const deleteCommunity = async (id: number) => {
  const res = await axiosInstance.delete(`/api/community-board/${id}`);
  return res.data;
};

export const useDeleteCommunity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteCommunity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['communityDetail'] });
      queryClient.invalidateQueries({ queryKey: ['communityList'] });
    }
  });
};
