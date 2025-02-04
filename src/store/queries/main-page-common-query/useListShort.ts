import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { AxiosError } from 'axios';

const fetchListShort = async () => {
  try {
    const response = await axiosInstance.get(`/api/recruit-boards?page=0&size=3`, {});
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('fetchListShort Error status:', axiosError.response?.status);
    throw error;
  }
};

export const useListShort = () => {
  return useQuery({
    queryKey: ['listShort'],
    queryFn: fetchListShort
  });
};
