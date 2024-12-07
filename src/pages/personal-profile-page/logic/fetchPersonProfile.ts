import axios from 'axios';

export const fetchPersonProfile = async (userId: string) => {
  try {
    const res = await axios.get(import.meta.env.VITE_APP_BASE_URL + `/api/volunteer/profile/${userId}`);
    console.log('fetchPersonProfile res', res);

    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('fetchPersonProfile res 400');
    else if (res.status === 500) console.log('fetchPersonProfile res 500');
  } catch (e) {
    console.error(e);
  }
};
