import { useQuery } from '@tanstack/react-query';

import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import axiosInstance from '@/api/apis';

const fetchCenterProfileForAidRq = async (centerId: string) => {
  const response = await axiosInstance.get(`/api/center/profile/${centerId}`);
  return response.data;
};

export const useFetchCenterProfileForAidRq = (centerId: string) => {
  return useQuery<centerProfileType>({
    queryKey: ['centerProfile', centerId],
    queryFn: () => fetchCenterProfileForAidRq(centerId)
  });
};
