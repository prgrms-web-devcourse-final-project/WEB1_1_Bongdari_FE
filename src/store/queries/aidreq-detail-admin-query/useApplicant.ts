import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { VolunteerApplyParams } from '@/shared/types/aidrq-volunteer-list/volunteerListType';
// import Cookies from 'js-cookie';

// 지원자 리스트 api

const getVolunteerApplies = async ({ recruitBoardId, page, size, attended, status }: VolunteerApplyParams) => {
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

  // 혹시 몰라 주석처리
  // const response = await axiosInstance.get(`/api/volunteer-applies/recruit-board/${recruitBoardId}?${params}`, {
  //   headers: {
  //     Authorization: `${Cookies.get('ACCESS')}`
  //   }
  // });

  const response = await axiosInstance.get(`/api/volunteer-applies/recruit-board/${recruitBoardId}?${params}`);

  return response.data.content;
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
  size: number = 9,
  status?: 'WAITING' | 'APPROVED' | 'REJECTED',
  attended?: false | true
) => {
  return useQuery({
    queryKey: ['volunteerApplies', recruitBoardId, page, size, status, attended],
    queryFn: () => getVolunteerApplies({ recruitBoardId, page, size, status, attended }),
    enabled: !!recruitBoardId,
    placeholderData: keepPreviousData
  });
};
