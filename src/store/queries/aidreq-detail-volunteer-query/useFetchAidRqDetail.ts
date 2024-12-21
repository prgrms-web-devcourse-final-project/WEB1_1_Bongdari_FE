import axios from 'axios';

export const fetchAidRqDetail = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/recruit-board/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error:', error);
  }
};
