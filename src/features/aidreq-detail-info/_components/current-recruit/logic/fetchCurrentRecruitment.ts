import axios from 'axios';

export const fetchCurrentRecruitment = async (id: number) => {
  const response = await axios.get(`https://api.somemore.site/api/volunteer-apply/recruit-board/${id}/summary`);
  return response.data.data;
};
