import axios from 'axios';

export const postInterest = async (center_id: string, myLoginId: string) => {
  try {
    const res = await axios.post(import.meta.env.VITE_APP_BASE_URL + `/api/interest-center`, {
      volunteer_id: myLoginId,
      center_id: center_id
    });
    console.log('interest POST Response:', res.data);
    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('postInterest res 400');
    else if (res.status === 500) console.log('postInterest res 500');
  } catch (e) {
    console.error('POST Error:', e);
  }
};

export const deleteInterest = async (center_id: string) => {
  try {
    const res = await axios.post(import.meta.env.VITE_APP_BASE_URL + `/api/interest-center/${center_id}`);
    console.log('interest Delete Response:', res.data);
    if (res.status === 200) return res.data;
    else if (res.status === 400) console.log('deleteInterest res 400');
    else if (res.status === 500) console.log('deleteInterest res 500');
  } catch (e) {
    console.error('DELETE Error:', e);
  }
};
