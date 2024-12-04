import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchRanking = async () => {
  const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/volunteer/ranking/hours`, {});
  return response.data.data;
};

export const useRanking = () => {
  return useQuery({
    queryKey: ['ranking'],
    queryFn: fetchRanking
  });
};
