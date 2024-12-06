import { useLoginStore } from '@/store/stores/login/loginStore';
import axios from 'axios';
import Cookies from 'js-cookie';

const LocalTestBoxVolun = () => {
  const setLoginInfo = useLoginStore((state) => state.setLoginInfo);
  return (
    <button
      onClick={() => {
        const testLoginPerson = async () => {
          try {
            const response = await axios.get(
              `${import.meta.env.VITE_APP_BASE_URL}/api/develop/token/volunteer/0e08233e-ff0e-4a85-b21b-edfb2087ca66`
            );
            const token = response.data.message;
            console.log(token);

            // 쿠키에 토큰 저장
            Cookies.set('ACCESS', token, {
              expires: 7, // 7일 후 만료
              path: '/', // 모든 경로에서 접근 가능
              secure: false,
              sameSite: 'none'
            });

            setLoginInfo('0e08233e-ff0e-4a85-b21b-edfb2087ca66', 'ROLE_VOLUNTEER');

            return response;
          } catch (error) {
            console.error('Login failed:', error);
            throw error;
          }
        };
        testLoginPerson();
      }}>
      봉사자로그인
    </button>
  );
};

export default LocalTestBoxVolun;
