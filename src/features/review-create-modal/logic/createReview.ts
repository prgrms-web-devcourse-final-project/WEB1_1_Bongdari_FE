import axiosInstance from '@/api/apis';

export const createReview = async (formData: FormData) => {
  console.log('여기까지는 옴');
  const response = await axiosInstance.post('/api/review', formData);
  return response.data;
};
