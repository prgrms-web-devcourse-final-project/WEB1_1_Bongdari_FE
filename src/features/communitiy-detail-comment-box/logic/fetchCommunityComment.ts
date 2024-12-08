import axiosInstance from '@/api/apis';
import { resType } from '@/shared/types/resType';
import axios from 'axios';

export const fetchCommunityComment = async (content_id: number) => {
  try {
    const res = await axios.get(
      import.meta.env.VITE_APP_BASE_URL + `/api/community-board/${content_id}/comments?sort=%5B%22DESC%22%5D`
    );
    console.log('fetchCommunityComment data', res.data);

    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchCommunityComment res 400');
    else if (res.status === 500) console.log('fetchCommunityComment res 500');
  } catch (e) {
    console.error(e);
  }
};

export const postCommunityComment = async (content_id: number, content: string, parent_id?: number) => {
  try {
    const res: resType<number> = await axiosInstance.post(`/api/community-board/${content_id}/comment`, {
      // POST 요청의 body
      content: content,
      parent_comment_id: parent_id // 선택적으로 전달
    });
    console.log('postCommunityComment data', res);

    if (res.code >= 200 && res.code < 300) return res.data;
    else console.log(`fetchCommunityComment res ${res.code}`);
  } catch (e) {
    console.error(e);
  }
};

export const putCommunityComment = async (content_id: number, comment_id: number, content: string) => {
  try {
    const res: resType<number> = await axiosInstance.put(`/api/community-board/${content_id}/comment/${comment_id}`, {
      content: content
    });
    console.log('putCommunityComment data', res);

    if (res.code >= 200 && res.code < 300) return res.data;
    else console.log(`putCommunityComment res ${res.code}`);
  } catch (e) {
    console.error(e);
  }
};

export const deleteCommunityComment = async (content_id: number, comment_id: number) => {
  try {
    const res: resType<string> = await axiosInstance.delete(`/api/community-board/${content_id}/comment/${comment_id}`);
    console.log('deleteCommunityComment data', res);

    if (res.code >= 200 && res.code < 300) return res.data;
    else console.log(`deleteCommunityComment res ${res.code}`);
  } catch (e) {
    console.error(e);
  }
};
