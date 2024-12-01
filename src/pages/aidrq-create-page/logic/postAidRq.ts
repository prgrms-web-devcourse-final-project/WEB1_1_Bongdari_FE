import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import axios from 'axios';

export const postAidRq = async (volunteerData: VolunteerType) => {
  const response = await axios.post('api/aidrq/create', volunteerData);
  return response.data;
};
