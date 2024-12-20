import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
// import Cookies from 'js-cookie';

// 해당 기관에게 온 쪽지 리스트 api---------------------------------------------------------------
const fetchMessageList = async (page: number) => {
  // const response = await axiosInstance.get(`/api/note/center?page=${page}&size=6`, {
  //   headers: {
  //     Authorization: `Bearer ${Cookies.get('ACCESS')}`
  //   }
  // });
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

// 티어를 넣기 위한 타인 프로필 조회 api 연결
// interface ApiResponse {
//   code: number;
//   message: string;
//   data: ProfileDetail;
// }

const fetchProfileDetail = async (senderId: string) => {
  const response = await axiosInstance.get<personProfileType>(`/api/volunteer/profile/${senderId}`);
  return response.data;
};

export const useApplicantDetail = (senderId: string) => {
  return useQuery<personProfileType>({
    // ApiResponse 타입으로 지정
    queryKey: ['profileDetail', senderId],
    queryFn: () => fetchProfileDetail(senderId),
    enabled: !!senderId,
    staleTime: 1000 * 60 * 5
  });
};
