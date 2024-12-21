import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';

import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

const fetchRecruitDetail = async (id: number): Promise<AidRqDetailType> => {
  const response = await axiosInstance.get(`/api/recruit-board/${id}`);
  return response.data;
};

export const useGetRecruitDetail = (id: number) => {
  return useQuery({
    queryKey: ['recruitDetail', id],
    queryFn: () => fetchRecruitDetail(id),
    staleTime: 1000 * 60 * 5,
    enabled: Boolean(id)
  });
};
