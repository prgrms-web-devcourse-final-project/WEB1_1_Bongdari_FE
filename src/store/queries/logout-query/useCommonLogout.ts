import axiosInstance from '@/api/apis';

export const commonLogout = async () => {
  try {
    const response = await axiosInstance.post('/api/sign-out');
    return response;
  } catch (error) {
    console.error('로그아웃 중 오류 발생:', error);
    throw error;
  }
};
