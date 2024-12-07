import axiosInstance from '@/api/apis';
import { useLoginStore } from '@/store/stores/login/loginStore';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const LocalTestBox = () => {
  const setLoginInfo = useLoginStore((state) => state.setLoginInfo);
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const loginType = useLoginStore((state) => state.loginType);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  useEffect(() => {
    console.log('로그인정보를 보여줄게', myLoginId, loginType, isLoggedIn);
  }, [isLoggedIn]);

  return (
    <button
      onClick={() => {
        const testLoginCenter = async () => {
          try {
            const response = await axios.get(
              `${import.meta.env.VITE_APP_BASE_URL}/api/develop/token/center/B8473384-AE17-11EF-AA15-0A855994FB4B`
            );
            const token = response.data.message;
            console.log(token);

            // 쿠키에 토큰 저장
            Cookies.set('ACCESS', token, {
              expires: 7, // 7일 후 만료
              path: '/', // 모든 경로에서 접근 가능
              secure: true,
              sameSite: 'none'
            });

            ///
            ///
            ///로그인정보 가져오기
            const getLoginInfo = async () => {
              try {
                const response = await axiosInstance.get('/api/token/userinfo', {
                  headers: {
                    Authorization: `${token}`
                  }
                });
                // 응답으로 받은 로그인 정보를 zustand에 저장
                console.log(response.data);
                const USER_ID = response.data.USER_ID;
                const ROLE = response.data.ROLE;
                setLoginInfo(USER_ID, ROLE);
              } catch (error) {
                console.error('로그인 정보 가져오기 실패:', error);
              }
            };
            getLoginInfo();
            //
            //
            //

            return response;
          } catch (error) {
            console.error('Login failed:', error);
            throw error;
          }
        };
        testLoginCenter();
      }}>
      센터로그인
    </button>
  );
};

export default LocalTestBox;
