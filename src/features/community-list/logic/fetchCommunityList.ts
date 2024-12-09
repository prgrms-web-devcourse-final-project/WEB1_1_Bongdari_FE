import axiosInstance from '@/api/apis';
import { communityListType } from '@/shared/types/community-type/CommuntiyTypes';
import { dataTypeWithPage, resType } from '@/shared/types/resType';

export const fetchCommunityList = async (searchWord?: string, page: number = 0) => {
  const trimSearchWord = searchWord?.trim();
  if (trimSearchWord) {
    try {
      const res: resType<dataTypeWithPage<communityListType[]>> = await axiosInstance.get(
        `/api/community-boards/search?keyword=${searchWord}&page=${page}`
      );
      console.log('fetchCommunityList data', res);

      if (res.code >= 200 && res.code < 300) return res.data;
      else console.log(`fetchCommunityComment res ${res.code}`);
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      const res: resType<dataTypeWithPage<communityListType[]>> = await axiosInstance.get(
        `/api/community-boards?page=${page}`
      );
      console.log('fetchCommunityList data', res);

      if (res.code >= 200 && res.code < 300) return res.data;
      else console.log(`fetchCommunityComment res ${res.code}`);
    } catch (e) {
      console.error(e);
    }
  }
};
