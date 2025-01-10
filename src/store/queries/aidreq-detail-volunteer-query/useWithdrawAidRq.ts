import axiosInstance from '@/api/apis/index';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const withdrawAidRqFn = async (id: number) => {
  const response = await axiosInstance.delete(`/api/volunteer-apply/${id}`);
  return response;
};

export const useWithDrawAidRq = () => {
  return useMutation({
    mutationFn: (id: number) => withdrawAidRqFn(id),
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.error('지원하기 철회 중 에러 발생', error.response);
        throw new Error(error.response?.data.message || '지원 중 오류가 발생했습니다');
      }
      throw error;
    }
  });
};
