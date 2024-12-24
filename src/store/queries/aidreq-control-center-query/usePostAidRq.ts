import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { VolunteerType } from '@/shared/types/aidrq-create-type/AidRqCreateType';
import axios from 'axios';

interface PostAidRqParams {
  volunteerData: VolunteerType;
  imgFile?: File;
}

const postAidRqFn = async ({ volunteerData, imgFile }: PostAidRqParams) => {
  const formData = new FormData();
  formData.append('data', JSON.stringify(volunteerData));
  formData.append('img_file', imgFile || '');

  const response = await axiosInstance.post('/api/recruit-board', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

export const usePostAidRq = () => {
  return useMutation({
    mutationFn: postAidRqFn,
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message || '작성 중 오류가 발생했습니다');
      }
      throw error;
    }
  });
};
