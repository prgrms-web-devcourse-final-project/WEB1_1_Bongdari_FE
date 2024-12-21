import axiosInstance from '@/api/apis';

export const fetchCurrentRecruitment = async (id: number) => {
  const response = await axiosInstance.get(`/api/volunteer-apply/recruit-board/${id}/summary`);
  return response.data;
};
