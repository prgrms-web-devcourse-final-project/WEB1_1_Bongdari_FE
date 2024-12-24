import axiosInstance from '@/api/apis/index';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const applyAidRqFn = async (id: string) => {
  const response = await axiosInstance.post('/api/volunteer-apply', { recruit_board_id: id });
  return response;
};

// Mutation 훅
export const useApplyAidRq = () => {
  return useMutation({
    mutationFn: (id: string) => applyAidRqFn(id),
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.log('Error response:', error.response);
        throw new Error(error.response?.data.message || '지원 중 오류가 발생했습니다');
      }
      throw error;
    }
  });
};
