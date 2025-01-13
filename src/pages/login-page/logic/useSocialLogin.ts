import axiosInstance from '@/api/apis';
import axios from 'axios';

export const handleNaverLogin = async () => {
  // window.location.href = `${import.meta.env.VITE_APP_BASE_URL}/oauth2/authorization/naver`;
  try {
    const response = await axiosInstance.post('/api/volunteer/sign-in/oauth/naver');
    console.log('네이버 로그인 성공:', response);
    return response;
  } catch (error: unknown) {
    // axios error type guard
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error('네이버 로그인 실패 - 서버 응답:', {
          status: error.response.status,
          data: error.response.data
        });
      } else if (error.request) {
        console.error('네이버 로그인 실패 - 응답 없음:', error.request);
      } else {
        console.error('네이버 로그인 실패 - 요청 에러:', error.message);
      }
    } else if (error instanceof Error) {
      console.error('일반 에러:', error.message);
    } else {
      console.error('알 수 없는 에러:', error);
    }
    throw error;
  }
};

export const handleKakaoLogin = () => {
  console.log('카카오 로그인 시도');
};
