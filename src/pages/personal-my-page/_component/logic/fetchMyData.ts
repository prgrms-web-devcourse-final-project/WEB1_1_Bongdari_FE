import axios from 'axios';

export const fetchMyProfile = async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/volunteer/profile/me`);
    console.log('fetchMyProfile data', res.data);
    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchMyProfile res 400');
    else if (res.status === 500) console.log('fetchMyProfile res 500');
  } catch (e) {
    console.error(e);
  }
};

export const fetchMyInterestCenter = async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/interest-centers`);
    console.log('fetchMyInterestCenter data', res.data);
    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchMyInterestCenter res 400');
    else if (res.status === 500) console.log('fetchMyInterestCenter res 500');
  } catch (e) {
    console.error(e);
  }
};

export const fetchMyReview = async (myLoginId: string, page: number = 1) => {
  try {
    const res = await axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/reviews/volunteer/${myLoginId}?page=${page}`);
    console.log('fetchMyReview data', res.data);
    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchMyReview res 400');
    else if (res.status === 500) console.log('fetchMyReview res 500');
  } catch (e) {
    console.error(e);
  }
};
