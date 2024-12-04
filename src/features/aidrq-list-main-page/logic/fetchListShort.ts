import axios from 'axios';

export const fetchListShort = async () => {
  const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/recruit-boards?page=0&size=3`, {});

  return response.data.data;
};
