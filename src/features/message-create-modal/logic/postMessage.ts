import axiosInstance from '@/api/apis';
import { resType } from '@/shared/types/resType';

export const postMessage = async (
  from: 'center' | 'volunteer',
  receiver_id: string,
  title: string,
  content: string
) => {
  try {
    if (from === 'center') {
      const res: resType<number> = await axiosInstance.post('/api/note/volunteer-to-center', {
        receiver_id,
        title,
        content
      });
      console.log('postMessage data', res);

      if (res.code >= 200 && res.code < 300) return res.data;
      else console.log(`postMessage res ${res.code}`);
    } else if (from === 'volunteer') {
      const res: resType<number> = await axiosInstance.post('/api/note/center-to-volunteer', {
        receiver_id,
        title,
        content
      });
      console.log('postMessage data', res);

      if (res.code >= 200 && res.code < 300) return res.data;
      else console.log(`postMessage res ${res.code}`);
    }
  } catch (e) {
    console.error(e);
  }
};
