import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { centerProfileType } from '@/shared/types/center-profile/centerProfile';

const fetchCenterProfileForAidRq = async (centerId: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/center/profile/${centerId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const useFetchCenterProfileForAidRq = (centerId: string) => {
  return useQuery<centerProfileType>({
    queryKey: ['centerProfile', centerId],
    queryFn: () => fetchCenterProfileForAidRq(centerId)
  });
};
