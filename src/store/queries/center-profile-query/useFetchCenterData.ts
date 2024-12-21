import axios from 'axios';

export const fetchCenterProfile = async (center_id: string) => {
  try {
    const res = await axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/center/profile/${center_id}`);
    console.log('fetchCenterProfile data', res.data);

    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchCenterProfile res 400');
    else if (res.status === 500) console.log('fetchCenterProfile res 500');
  } catch (e) {
    console.error(e);
  }
};

export const fetchCenterReview = async (center_id: string, page: number = 1) => {
  try {
    const res = await axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/reviews/center/${center_id}?page=${page}`);
    console.log('fetchCenterReview data', res.data);

    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchCenterReview res 400');
    else if (res.status === 500) console.log('fetchCenterReview res 500');
  } catch (e) {
    console.error(e);
  }
};
