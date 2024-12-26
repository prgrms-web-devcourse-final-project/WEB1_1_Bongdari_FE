import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { resType } from '@/shared/types/resType';

export const postMessage = async (
  from: 'center' | 'volunteer',
  receiver_id: string,
  title: string,
  content: string
) => {
  if (from === 'volunteer') {
    const res: resType<number | string> = await axiosInstance.post('/api/note/volunteer-to-center', {
      receiver_id,
      title,
      content
    });
    return res.data;
  } else if (from === 'center') {
    const res: resType<number | string> = await axiosInstance.post('api/note/center-to-volunteer', {
      receiver_id,
      // 수정필요
      title,
      content
    });
    return res.data;
  }
};

export const usePostMessage = () => {
  return useMutation({
    mutationFn: ({
      from,
      receiver_id,
      title,
      content
    }: {
      from: 'center' | 'volunteer';
      receiver_id: string;
      title: string;
      content: string;
    }) => postMessage(from, receiver_id, title, content)
  });
};
