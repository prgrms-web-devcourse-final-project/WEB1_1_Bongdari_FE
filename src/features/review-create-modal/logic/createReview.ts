import axiosInstance from '@/api/apis';
import axios from 'axios';

interface ReviewData {
  recruit_board_id: number;
  title: string;
  content: string;
  img_file?: File;
}

export const createReview = async (data: ReviewData) => {
  try {
    const formData = new FormData();

    const jsonData = {
      recruit_board_id: data.recruit_board_id,
      title: data.title,
      content: data.content
    };
    formData.append('data', JSON.stringify(jsonData));

    if (data.img_file) {
      formData.append('img_file', data.img_file);
    }

    const response = await axiosInstance.post('/api/review', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || '리뷰 작성에 실패했습니다.');
    }
    throw error;
  }
};
