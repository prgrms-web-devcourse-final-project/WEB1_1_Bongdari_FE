import axiosInstance from '@/api/apis';
import Cookies from 'js-cookie';
import { resType } from '@/shared/types/resType';

// 커뮤니티 게시글 등록
export const postCommunity = async (formData: FormData) => {
  try {
    // axios POST 요청
    const res: resType<string> = await axiosInstance.post('/api/community-board', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${Cookies.get('ACCESS')}`
      }
    });

    console.log('postCommunity data', res);

    if (res.code >= 200 || res.code < 300) return res.data;
    else console.log(`postCommunity res ${res.code}`);
  } catch (e) {
    console.error('postCommunity error:', e);
    throw e; // 에러를 호출한 함수로 전달 (필요시)
  }
};

// 커뮤니티 게시글 수정
export const putCommunity = async (content_id: number, formData: FormData) => {
  try {
    // axios PUT 요청
    const res: resType<string> = await axiosInstance.post(`/api/community-board/${content_id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${Cookies.get('ACCESS')}`
      }
    });

    console.log('putCommunity data', res);

    if (res.code >= 200 || res.code < 300) return res.data;
    else console.log(`putCommunity res ${res.code}`);
  } catch (e) {
    console.error('putCommunity error:', e);
    throw e; // 에러를 호출한 함수로 전달 (필요시)
  }
};
