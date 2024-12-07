import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import Cookies from 'js-cookie';

export interface Volunteer {
  id: string;
  name: string;
  nickname: string;
  email: string;
  img_url: string;
}

export interface VolunteerApply {
  id: number;
  recruit_board_id: number;
  status: 'WAITING' | 'APPROVED' | 'REJECTED';
  attend: boolean;
  created_at: string;
  updated_at: string;
  volunteer: Volunteer;
}

interface VolunteerApplyResponse {
  code: number;
  message: string;
  data: {
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
    content: VolunteerApply[];
  };
}

interface VolunteerApplyParams {
  recruitBoardId: number;
  page: number;
  size: number;
  status?: 'WAITING' | 'APPROVED' | 'REJECTED';
  attended?: boolean;
}

const getVolunteerApplies = async ({
  recruitBoardId,
  page,
  size,
  attended,
  status
}: VolunteerApplyParams): Promise<VolunteerApplyResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
    sort: 'created_at,desc'
  });

  if (attended !== undefined) {
    params.append('attended', attended.toString());
  }
  if (status) {
    params.append('status', status);
  }

  const response = await axiosInstance.get(`/api/volunteer-applies/recruit-board/${recruitBoardId}?${params}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('ACCESS')}`
    }
  });
  return response.data;
};

// export const useVolunteerApplies = (recruitBoardId: number) => {
//   return useQuery({
//     queryKey: ['volunteerApplies', recruitBoardId],
//     queryFn: () => getVolunteerApplies(recruitBoardId),
//     enabled: !!recruitBoardId
//   });
// };

export const useVolunteerApplies = (
  recruitBoardId: number,
  page: number = 0,
  size: number = 10,
  status?: 'WAITING' | 'APPROVED' | 'REJECTED',
  attended?: boolean
) => {
  return useQuery({
    queryKey: ['volunteerApplies', recruitBoardId, page, size, status, attended],
    queryFn: () => getVolunteerApplies({ recruitBoardId, page, size, status, attended }),
    enabled: !!recruitBoardId,
    placeholderData: keepPreviousData
  });
};
