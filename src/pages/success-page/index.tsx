import axiosInstance from '@/api/apis';
import { updateLoginInfo } from '@/store/queries/update-login-info/updateLoginInfo';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios'; // AxiosError import 추가

const SuccessPage = () => {
  const loginType = useLoginStore((state) => state.loginType);
  const clearLoginInfo = useLoginStore((state) => state.clearLoginInfo);

  const navigate = useNavigate();

  ///////////////////////////////////////////////////////////
  //단기토큰으로 ACCESS토큰 발급. 토큰을 해석해서 zustand에 저장
  ///////////////////////////////////////////////////////////
  useEffect(() => {
    const getAccessToken = async () => {
      try {
        // 요청 전 쿠키 확인
        console.log('Current cookies:', document.cookie);

        const response = await axiosInstance.get('/api/auth/token/exchange');

        console.log('Exchange API 전체 응답:', response);

        // 응답 데이터 형식 확인
        const token = response.data?.token || response.data;
        console.log('Extracted token:', token);

        if (!token) {
          throw new Error('Token not found in response');
        }

        localStorage.setItem('token', token);
        await updateLoginInfo(token);

        // 토큰 저장 후 상태 확인
        console.log('Stored token:', localStorage.getItem('token'));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Type Guard를 사용하여 AxiosError 타입 체크
          console.error('상세 에러 정보:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
          });
        } else {
          console.error('알 수 없는 에러:', error);
        }
        clearLoginInfo();
        navigate('/login');
      }
    };

    getAccessToken();
  }, [clearLoginInfo, navigate]);

  ////////////////////////////
  //상세정보입력 여부 가져와서 리디렉션 위치 판별
  ////////////////////////////
  useEffect(() => {
    const checkBasicInfo = async () => {
      try {
        const response = await axiosInstance.get('api/user/check/basic-info');
        const hasBasicInfo = response.data;

        console.log('hasBasicInfo', hasBasicInfo);

        if (hasBasicInfo) {
          navigate('/main');
        } else {
          if (loginType === 'ROLE_CENTER') {
            navigate('/center-detail');
          } else if (loginType === 'ROLE_VOLUNTEER') {
            navigate('/volunteer-detail');
          }
        }
      } catch (error) {
        console.error('상세정보 확인 실패:', error);
      }
    };

    if (loginType) {
      checkBasicInfo();
    }
  }, [loginType]);

  return <></>;
};

export default SuccessPage;
