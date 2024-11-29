import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

interface ApiResponse {
  code: number;
  message: string;
  data: AidRqDetailType;
}

export const fetchData = async (setData: Dispatch<SetStateAction<ApiResponse | null>>) => {
  try {
    const response = await axios.get('./dummyData.json');
    setData(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
