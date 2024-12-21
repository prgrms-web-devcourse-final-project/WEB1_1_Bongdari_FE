import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface ApiResponse {
  code: number;
  message: string;
  data: AidRqDetailType;
}

export const fetchAidRqDetail = async (
  setData: Dispatch<SetStateAction<ApiResponse | null>>,
  id: string | undefined
) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/recruit-board/${id}`);
    setData(response.data);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
