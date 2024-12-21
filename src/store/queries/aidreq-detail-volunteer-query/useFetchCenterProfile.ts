import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';

interface CenterResponse {
  code: number;
  message: string;
  data: centerProfileType;
}

export const fetchCenterProfileForAidRq = async (
  setCenterData: Dispatch<SetStateAction<CenterResponse | null>>,
  centerId: string
) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/center/profile/${centerId}`);
    setCenterData(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
