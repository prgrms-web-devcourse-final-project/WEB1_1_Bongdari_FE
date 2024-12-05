import axios from 'axios';
import Cookies from 'js-cookie';

export const testLoginCenter = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/api/develop/token/center/B8473384-AE17-11EF-AA15-0A855994FB4B`
    );
    const token = response.data.message;
    console.log(token);

    // 쿠키에 토큰 저장
    Cookies.set('centerToken', token, {
      expires: 7, // 7일 후 만료
      path: '/', // 모든 경로에서 접근 가능
      secure: true, // HTTPS에서만 쿠키 전송
      sameSite: 'strict' // CSRF 방지
    });

    return response;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
