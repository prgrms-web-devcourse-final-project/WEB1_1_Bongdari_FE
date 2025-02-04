import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const fetchMainCommunity = async () => {
  try {
    const response = await axiosInstance.get(`/api/community-boards?page=0`, {});
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('fetchMainCommunity Error status:', axiosError.response?.status);
    throw error;
  }
};

export const useMainCommunity = () => {
  return useQuery({
    queryKey: ['community'],
    queryFn: fetchMainCommunity
  });
};
