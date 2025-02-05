import axiosInstance from '@/api/apis';
import { updateLoginInfo } from '@/store/queries/update-login-info/updateLoginInfo';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

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
        const response = await axiosInstance.get('/api/auth/token/exchange');
        const token = response.data;

        // ACCESS 토큰을 localStorage에 저장
        localStorage.setItem('token', token);

        updateLoginInfo(token);
      } catch (error) {
        console.error('ACCESS 토큰 교환 실패:', error);
        clearLoginInfo();
        // 에러 시 로그인 페이지로 리디렉션
        navigate('/login');
      }
    };

    getAccessToken();
  }, []);

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
