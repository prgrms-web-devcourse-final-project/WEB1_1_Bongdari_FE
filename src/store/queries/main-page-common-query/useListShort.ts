import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';

const fetchListShort = async () => {
  const response = await axiosInstance.get(`/api/recruit-boards?page=0&size=3`, {});

  return response.data;
};

export const useListShort = () => {
  return useQuery({
    queryKey: ['listShort'],
    queryFn: fetchListShort
  });
};
