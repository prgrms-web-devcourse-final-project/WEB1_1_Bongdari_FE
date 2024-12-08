import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import Cookies from 'js-cookie';

// 해당 기관에게 온 쪽지 리스트 api---------------------------------------------------------------
export interface MessageItem {
  id: number;
  title: string;
  sender_id: string;
  sender_name: string;
  is_read: boolean;
}

const fetchMessageList = async (page: number) => {
  const response = await axiosInstance.get(`/api/note/center?page=${page}&size=1`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('ACCESS')}`
    }
  });

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
