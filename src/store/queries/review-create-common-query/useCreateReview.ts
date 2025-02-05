import axiosInstance from '@/api/apis';

interface ReviewQuest {
  volunteer_apply_id: number;
  title: string;
  content: string;
}

export const createReview = async (reviewBody: ReviewQuest) => {
  try {
    const response = await axiosInstance.post('/api/review', reviewBody);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('리뷰 작성에 실패했습니다.');
  }
};
