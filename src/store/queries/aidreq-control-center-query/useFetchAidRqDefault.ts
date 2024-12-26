import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const fetchAidRqDefault = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/recruit-board/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const useFetchAidRqDefault = (id: string | undefined) => {
  return useQuery({
    queryKey: ['aidrqDetail', id],
    queryFn: () => fetchAidRqDefault(id)
  });
};
