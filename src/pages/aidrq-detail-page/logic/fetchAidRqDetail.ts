import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface ApiResponse {
  code: number;
  message: string;
  data: AidRqDetailType;
}

export const fetchAidRqDetail = async (setData: Dispatch<SetStateAction<ApiResponse | null>>) => {
  try {
    const response = await axios.get('http://54.180.201.20:8080/api/recruit-board/1');
    setData(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
