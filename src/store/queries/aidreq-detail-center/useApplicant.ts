import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';

interface Volunteer {
  id: string;
  name: string;
  nickname: string;
  email: string;
  img_url: string;
}

interface VolunteerApply {
  id: number;
  recruit_board_id: number;
  status: string;
  attend: boolean;
  created_at: string;
  updated_at: string;
  volunteer: Volunteer;
}

const getVolunteerApplies = async (recruitBoardId: number): Promise<{ data: { content: VolunteerApply[] } }> => {
  const response = await axiosInstance.get(`/api/volunteer-applies/recruit-board/${recruitBoardId}`);
  return response;
};

export const useVolunteerApplies = (recruitBoardId: number) => {
  return useQuery({
    queryKey: ['volunteerApplies', recruitBoardId],
    queryFn: () => getVolunteerApplies(recruitBoardId),
    enabled: !!recruitBoardId
  });
};
