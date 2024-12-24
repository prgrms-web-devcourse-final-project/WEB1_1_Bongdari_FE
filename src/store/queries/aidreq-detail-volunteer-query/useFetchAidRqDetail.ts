import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

const fetchAidRqDetail = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/recruit-board/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const useFetchAidRqDetail = (id: string | undefined) => {
  return useQuery<AidRqDetailType>({
    queryKey: ['centerProfile', id],
    queryFn: () => fetchAidRqDetail(id)
  });
};
