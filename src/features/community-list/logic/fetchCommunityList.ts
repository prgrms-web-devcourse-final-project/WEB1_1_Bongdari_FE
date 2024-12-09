import axiosInstance from '@/api/apis';

export const fetchCommunityList = async (searchWord: string, page: number = 0) => {
  const trimSearchWord = searchWord.trim();
  if (trimSearchWord) {
    try {
      const res = await axiosInstance.get(`/api/community-boards/search?keyword=${searchWord}&page=${page}`);
      console.log('fetchCommunityList data', res.data);

      if (res.status === 200) return res.data;
      else if (res.status === 400) console.log('fetchCommunityList res 400');
      else if (res.status === 500) console.log('fetchCommunityList res 500');
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      const res = await axiosInstance.get(`/api/community-boards?page=${page}`);
      console.log('fetchCommunityList data', res.data);

      if (res.status === 200) return res.data;
      else if (res.status === 400) console.log('fetchCommunityList res 400');
      else if (res.status === 500) console.log('fetchCommunityList res 500');
    } catch (e) {
      console.error(e);
    }
  }
};
