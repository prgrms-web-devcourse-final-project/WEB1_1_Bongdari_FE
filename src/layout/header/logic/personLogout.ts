import axiosInstance from '@/api/apis';
import Cookies from 'js-cookie';

export const personLogout = async () => {
  try {
    const response = await axiosInstance.post('/api/volunteer/sign-out', {
      headers: {
        Authorization: `${Cookies.get('ACCESS')}`
      }
    });
    return response;
  } catch (error) {
    console.error('로그아웃 중 오류 발생:', error);
    throw error;
  }
};
