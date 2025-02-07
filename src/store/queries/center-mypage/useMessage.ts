import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';

// 해당 기관에게 온 쪽지 리스트 api---------------------------------------------------------------
const fetchMessageList = async (page: number) => {
  const response = await axiosInstance.get(`/api/note/center?page=${page}&size=6`);

  return response.data;
};

export const useMessageList = (page: number) => {
  return useQuery({
    queryKey: ['messageList', page],
    queryFn: () => fetchMessageList(page),
    staleTime: 1000 * 60 * 5
  });
};

// 해당 기관에게 온 쪽지 상세 조회 api -----------------------------------------------------------

const fetchMessageDetail = async (noteId: number, type: 'center' | 'volunteer') => {
  if (type === 'center') {
    const response = await axiosInstance.get(`/api/note/center/${noteId}`);
    return response.data;
  } else if (type === 'volunteer') {
    const response = await axiosInstance.get(`api/note/volunteer/${noteId}`);
    return response.data;
  }
};

export const useMessageDetail = (noteId: number, type: 'center' | 'volunteer') => {
  return useQuery({
    queryKey: ['messageDetail', noteId],
    queryFn: () => fetchMessageDetail(noteId, type),
    staleTime: 1000 * 60 * 5,
    enabled: !!noteId
  });
};

// const fetchProfileDetail = async (senderId: string) => {
//   const response = await axiosInstance.get<personProfileType>(`/api/volunteer/profile/volunteer-id/${senderId}`);
//   return response.data;
// };

const fetchProfileDetail = async (senderId: string, type: 'center' | 'volunteer') => {
  if (type === 'volunteer') {
    const response = await axiosInstance.get<personProfileType>(`/api/volunteer/profile/volunteer-id/${senderId}`);
    return response.data;
  } else {
    const response = await axiosInstance.get<centerProfileType>(`/api/center/profile/${senderId}`);
    return response.data;
  }
};

// export const useApplicantDetail = (senderId: string) => {
//   return useQuery<personProfileType>({
//     // ApiResponse 타입으로 지정
//     queryKey: ['profileDetail', senderId],
//     queryFn: () => fetchProfileDetail(senderId),
//     enabled: !!senderId,
//     staleTime: 1000 * 60 * 5
//   });
// };

export const useApplicantDetail = (senderId: string, type: 'center' | 'volunteer') => {
  return useQuery({
    queryKey: ['profileDetail', senderId, type],
    queryFn: () => fetchProfileDetail(senderId, type),
    enabled: !!senderId,
    staleTime: 1000 * 60 * 5
  });
};
