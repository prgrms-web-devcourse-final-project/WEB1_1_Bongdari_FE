import axiosInstance from '@/api/apis/index';
import axios from 'axios';

export const applyAidRq = async (id: string | undefined) => {
  if (!id) {
    throw new Error('모집글 ID가 필요합니다');
  }

  try {
    console.log('Sending request with:', {
      url: '/api/volunteer-apply',
      data: { recruit_board_id: id }
    });

    const response = await axiosInstance.post('/api/volunteer-apply', { recruit_board_id: id });

    console.log('Response:', response);
    return response;
  } catch (error) {
    console.log('Full error:', error);
    if (axios.isAxiosError(error)) {
      console.log('Error response:', error.response);
      throw new Error(error.response?.data.message || '지원 중 오류가 발생했습니다');
    }
    throw error;
  }
};
