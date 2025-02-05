import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import axiosInstance from '@/api/apis';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { updateLoginInfo } from '@/store/queries/update-login-info/updateLoginInfo';

const SuccessPage = () => {
  const token = localStorage.getItem('token');
  const loginType = useLoginStore((state) => state.loginType);
  const navigate = useNavigate();

  // 토큰 처리 및 로그인 정보 저장
  useEffect(() => {
    if (token) {
      updateLoginInfo(token);
    }
  }, [token]);

  // 상세정보 입력 여부 확인 및 리다이렉션
  useEffect(() => {
    const checkBasicInfo = async () => {
      try {
        const response = await axiosInstance.get('api/user/check/basic-info');
        const hasBasicInfo = response.data;

        if (hasBasicInfo) {
          navigate('/main');
        } else {
          switch (loginType) {
            case 'ROLE_CENTER':
              navigate('/center-detail');
              break;
            case 'ROLE_VOLUNTEER':
              navigate('/volunteer-detail');
              break;
            default:
              break;
          }
        }
      } catch (error) {
        console.error('상세정보 확인 실패:', error);
        // 에러 발생 시 로그인 페이지로 리다이렉션 추가
        navigate('/login');
      }
    };

    if (loginType) {
      checkBasicInfo();
    }
  }, [loginType, navigate]);

  return <></>;
};

export default SuccessPage;
