import axiosInstance from '@/api/apis';
import axios from 'axios';

import { RegularData } from '@/shared/types/aidrq-detail/aidrqDetailType';

export const updateRegular = async (id: string, changedRegular: RegularData, imgFile?: File) => {
  try {
    const formData = new FormData();
    formData.append('data', JSON.stringify(changedRegular));
    formData.append('img_file', imgFile || '');

    const response = await axiosInstance.put(`/api/recruit-board/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response;
  } catch (error) {
    console.log('Full error:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || '수정 중 오류가 발생했습니다');
    }
    throw error;
  }
};
