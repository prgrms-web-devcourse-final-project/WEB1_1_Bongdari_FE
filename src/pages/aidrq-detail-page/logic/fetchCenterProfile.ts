import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';

interface CenterResponse {
  code: number;
  message: string;
  data: centerProfileType;
}

export const fetchCenterProfile = async (setCenterData: Dispatch<SetStateAction<CenterResponse | null>>) => {
  try {
    const response = await axios.get(
      'http://54.180.201.20:8080/api/center/profile/B8472AE7-AE17-11EF-AA15-0A855994FB4B'
    );
    setCenterData(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
