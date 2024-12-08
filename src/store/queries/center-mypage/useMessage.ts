import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
// import Cookies from 'js-cookie';

// 해당 기관에게 온 쪽지 리스트 api---------------------------------------------------------------
export interface MessageItem {
  id: number;
  title: string;
  sender_id: string;
  sender_name: string;
  is_read: boolean;
}

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
export interface MessageItemDetail {
  note_id: number;
  title: string;
  content: string;
  sender_id: string;
  sender_name: string;
  sender_profile_img_link: string;
  created_at: string;
}

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
interface ApiResponse {
  code: number;
  message: string;
  data: ProfileDetail;
}

export interface ProfileDetail {
  volunteer_id: string;
  nickname: string;
  img_url: string;
  introduce: string;
  tier: string;
  total_volunteer_hours: number;
  total_volunteer_count: number;
  detail: {
    name: string;
    email: string;
    gender: string;
    birth_date: string;
    contact_number: string;
  };
}

const fetchProfileDetail = async (senderId: string) => {
  const response = await axiosInstance.get<ApiResponse>(`/api/volunteer/profile/${senderId}`);
  return response.data;
};

export const useApplicantDetail = (senderId: string) => {
  return useQuery<ApiResponse>({
    // ApiResponse 타입으로 지정
    queryKey: ['profileDetail', senderId],
    queryFn: () => fetchProfileDetail(senderId),
    enabled: !!senderId,
    staleTime: 1000 * 60 * 5
  });
};
