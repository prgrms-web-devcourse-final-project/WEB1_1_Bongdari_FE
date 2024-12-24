import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';

const fetchRanking = async () => {
  const response = await axiosInstance.get(`/api/volunteer/ranking/hours`, {});
  return response.data;
};

export const useRanking = () => {
  return useQuery({
    queryKey: ['ranking'],
    queryFn: fetchRanking
  });
};
