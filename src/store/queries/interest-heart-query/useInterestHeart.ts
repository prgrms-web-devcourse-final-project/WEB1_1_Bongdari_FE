import axiosInstance from '@/api/apis';
import { interestType } from '@/shared/types/interest/interestType';
import { resType } from '@/shared/types/resType';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// 관심기관 추가
const postInterest = async (center_id: string) => {
  const res: resType<interestType> = await axiosInstance.post(`/api/interest-center`, {
    center_id: center_id
  });
  return res.data;
};

export const usePostInterest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postInterest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interests'] });
    },
    onError: (error) => {
      console.error('Interest post failed:', error);
      // 에러 처리 로직 추가
    }
  });
};

// 관심기관 삭제
const deleteInterest = async (center_id: string) => {
  const res: resType<string> = await axiosInstance.delete(`/api/interest-center/${center_id}`);
  return res.data;
};

export const useDeleteInterest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteInterest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['interests'] });
    },
    onError: (error) => {
      console.error('Interest delete failed:', error);
      // 에러 처리 로직 추가
    }
  });
};
