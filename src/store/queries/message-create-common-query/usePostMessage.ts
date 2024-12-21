import axiosInstance from '@/api/apis';
import { resType } from '@/shared/types/resType';

export const postMessage = async (
  from: 'center' | 'volunteer',
  receiver_id: string,
  title: string,
  content: string
) => {
  try {
    if (from === 'volunteer') {
      const res: resType<number | string> = await axiosInstance.post('/api/note/volunteer-to-center', {
        receiver_id,
        title,
        content
      });
      console.log('postMessage data from volunteer', res);

      if (res.code >= 200 && res.code < 300) return res.data;
      else console.log(`postMessage res ${res.code}`);
    } else if (from === 'center') {
      const res: resType<number | string> = await axiosInstance.post('api/note/center-to-volunteer', {
        receiver_id: 'c85c117f-8df9-448a-b3be-7876c853f522',
        title,
        content
      });
      console.log('postMessage data from center', res);

      if (res.code >= 200 && res.code < 300) return res.data;
      else console.log(`postMessage res ${res.code}`);
    }
  } catch (e) {
    console.error(e);
  }
};
