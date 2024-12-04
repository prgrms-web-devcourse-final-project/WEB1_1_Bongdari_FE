import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchMainCommunity = async () => {
  const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/community-boards?page=0&size=6`, {});
  return response.data.data;
};

export const useMainCommunity = () => {
  return useQuery({
    queryKey: ['community'],
    queryFn: fetchMainCommunity
  });
};
