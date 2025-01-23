import axiosInstance from '@/api/apis';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const SuccessPage = () => {
  const token = sessionStorage.getItem('token');

  const loginType = useLoginStore((state) => state.loginType);
  const setLoginInfo = useLoginStore((state) => state.setLoginInfo);
  const clearLoginInfo = useLoginStore((state) => state.clearLoginInfo);

  const navigate = useNavigate();

  //단기토큰 받는거로 바뀌면, 해당 단기토큰으로 ACCESS토큰 받아오는 useEffect하나 더 필요 (쿠키에서 꺼내서 보내는거로)
  //로그인 로직에서는 session에 저장하는 것 삭제하고, 여기서 ACCESS받아서 session에 저장하도록 해야함.

  ///////////////////////////////
  //토큰을 해석해서 zustand에 저장
  ///////////////////////////////
  useEffect(() => {
    const getLoginInfo = () => {
      try {
        if (!token) {
          clearLoginInfo();
          return;
        }

        // Bearer 제거
        const actualToken = token.replace('Bearer ', '');

        // JWT 디코딩 (payload 부분)
        const payload = JSON.parse(atob(actualToken.split('.')[1]));

        const USER_ID = payload.userId;
        const ROLE = payload.role;

        if (ROLE === 'ROLE_CENTER' || ROLE === 'ROLE_VOLUNTEER') {
          setLoginInfo(USER_ID, ROLE);
        }
      } catch (error) {
        console.error('토큰 디코딩 실패:', error);
      }
    };

    getLoginInfo();
  }, [token, setLoginInfo]);

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
