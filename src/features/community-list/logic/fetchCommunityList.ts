import axios from 'axios';

export const fetchCommunityList = async (searchWord: string, page: number = 0) => {
  try {
    const res = await axios.get(
      import.meta.env.VITE_APP_BASE_URL + `/api/community-boards?keyword=${searchWord}&page=${page}`
    );
    console.log('fetchCommunityList data', res.data);

    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchCommunityList res 400');
    else if (res.status === 500) console.log('fetchCommunityList res 500');
  } catch (e) {
    console.error(e);
  }
};
