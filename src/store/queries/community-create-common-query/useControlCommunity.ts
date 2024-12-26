import axiosInstance from '@/api/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// 커뮤니티 게시글 등록
const postCommunity = async (formData: FormData) => {
  const res = await axiosInstance.post('/api/community-board', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

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
      queryClient.invalidateQueries({ queryKey: ['community'] });
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
const putCommunity = async (content_id: number, formData: FormData) => {
  const res = await axiosInstance.put(`/api/community-board/${content_id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return res.data;
};

export const usePutCommunity = (options?: {
  onSuccess?: (data: number) => void;
  onError?: (error: unknown) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ content_id, formData }: { content_id: number; formData: FormData }) =>
      putCommunity(content_id, formData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['community'] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      console.error('Error updating community:', error);
      options?.onError?.(error);
      throw error; // 다른 에러는 다시 throw
    }
  });
};
