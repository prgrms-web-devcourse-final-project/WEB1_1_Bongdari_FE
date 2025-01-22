import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';

const fetchRanking = async () => {
  const response = await axiosInstance.get(`/api/volunteerrecord/ranking`, {});
  return response.data;
};

export const useRanking = () => {
  return useQuery({
    queryKey: ['ranking'],
    queryFn: fetchRanking
  });
};
