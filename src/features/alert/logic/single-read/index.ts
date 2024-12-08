import axiosInstance from '@/api/apis';

export const singleRead = async (id: number) => {
  try {
    const response = await axiosInstance.patch(`/api/notification/read/${id}`);
    return response;
  } catch (error) {
    console.error('알림 읽기 처리 중 오류가 발생했습니다:', error);
    throw error;
  }
};
