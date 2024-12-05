import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';

interface RecruitDetail {
  id: number;
  center_id: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  region: string;
  recruit_status: string;
  recruitment_count: number;
  volunteer_start_date_time: string;
  volunteer_end_date_time: string;
  volunteer_category: string;
  volunteer_time: string;
  admitted: boolean;
  img_url: string;
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
}

const fetchRecruitDetail = async (id: number): Promise<RecruitDetail> => {
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
