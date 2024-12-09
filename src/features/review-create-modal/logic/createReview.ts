import axiosInstance from '@/api/apis';

export const createReview = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post('/api/recruit-board', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('리뷰 작성에 실패했습니다.');
  }
};
