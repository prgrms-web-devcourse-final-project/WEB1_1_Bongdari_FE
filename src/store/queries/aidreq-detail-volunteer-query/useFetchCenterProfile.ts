import axios from 'axios';

export const fetchCenterProfileForAidRq = async (centerId: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/center/profile/${centerId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
