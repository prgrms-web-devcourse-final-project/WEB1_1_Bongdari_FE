import axiosInstance from '@/api/apis';
import { communityDetailType } from '@/shared/types/community-type/CommuntiyTypes';
import { resType } from '@/shared/types/resType';

export const fetchCommunityDetailContent = async (content_id: number) => {
  try {
    const res: resType<communityDetailType> = await axiosInstance.get(`/api/community-board/${content_id}`);
    console.log('fetchCommunityDetailContent data', res);

    if (res.code >= 200 || res.code < 300) return res.data;
    else console.log(`fetchCommunityDetailContent res ${res.code}`);
  } catch (e) {
    console.error(e);
  }
};
