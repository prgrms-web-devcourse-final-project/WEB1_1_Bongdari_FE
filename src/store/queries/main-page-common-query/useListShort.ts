import axiosInstance from '@/api/apis';

export const fetchListShort = async () => {
  const response = await axiosInstance.get(`/api/recruit-boards?page=0&size=3`, {});

  return response.data;
};
