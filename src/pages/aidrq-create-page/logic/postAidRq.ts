import axiosInstance from '@/api/apis';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import axios from 'axios';
import Cookies from 'js-cookie';

export const postAidRq = async (volunteerData: VolunteerType, imgFile?: File) => {
  try {
    console.log(volunteerData);
    const formData = new FormData();
    formData.append('data', JSON.stringify(volunteerData));
    formData.append('img_file', imgFile || '');

    const response = await axiosInstance.post('/api/recruit-board', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${Cookies.get('ACCESS')}`
      }
    });
    return response;
  } catch (error) {
    console.log('Full error:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || '지원 중 오류가 발생했습니다');
    }
    throw error;
  }
};
