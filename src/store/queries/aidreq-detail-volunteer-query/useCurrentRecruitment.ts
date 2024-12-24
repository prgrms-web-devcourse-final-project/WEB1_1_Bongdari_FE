import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { RecruitmentState } from '@/shared/types/recruitment-state/recruitmentStateType';

export const fetchCurrentRecruitment = async (id: number) => {
  const response = await axiosInstance.get(`/api/volunteer-apply/recruit-board/${id}/summary`);
  return response.data;
};

export const useCurrentRecruitment = (id: number) => {
  return useQuery<RecruitmentState>({
    queryKey: ['currentRecruitment', id],
    queryFn: () => fetchCurrentRecruitment(id),
    enabled: !!id
  });
};
