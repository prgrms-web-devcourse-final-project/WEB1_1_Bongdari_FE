import axios from 'axios';

export const fetchCommunityDetailContent = async (content_id: number) => {
  try {
    const res = await axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/community-board/${content_id}`);
    console.log('fetchCommunityDetailContent data', res.data);

    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchCommunityDetailContent res 400');
    else if (res.status === 500) console.log('fetchCommunityDetailContent res 500');
  } catch (e) {
    console.error(e);
  }
};
