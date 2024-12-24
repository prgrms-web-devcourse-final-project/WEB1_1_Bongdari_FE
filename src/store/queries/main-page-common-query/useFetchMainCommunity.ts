import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';

const fetchMainCommunity = async () => {
  const response = await axiosInstance.get(`/api/community-boards?page=0`, {});
  return response.data;
};

export const useMainCommunity = () => {
  return useQuery({
    queryKey: ['community'],
    queryFn: fetchMainCommunity
  });
};
