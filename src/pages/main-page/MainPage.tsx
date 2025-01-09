import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import MainBanner from '@/features/main-banner';
import { RankAndCommu, Wrapper } from './MainpageCss';
import WriteAidReqButtonComponent from '@/components/write-aidreq-button';
import AidRqRecentList from './_components/aidrq-recent-list';
import Ranking from './_components/ranking';
import Community from './_components/community';
import { useLoginStore } from '@/store/stores/login/loginStore';
import axiosInstance from '@/api/apis';
import useInterestStore from '@/store/stores/interest-center/interestStore';
import axios from 'axios';

export default function MainPage() {
  const location = useLocation();
  const token = location.state?.token;

  const loginType = useLoginStore((state) => state.loginType);
  const setLoginInfo = useLoginStore((state) => state.setLoginInfo);
  const setCenterIds = useInterestStore((state) => state.setCenterIds);

  //단기토큰 받는거로 바뀌면, 해당 단기토큰으로 ACCESS토큰 받아오는 useEffect하나 더 필요 (쿠키에서 꺼내서 보내는거로)

  /////////////////////////////////////////////
  //토큰을 통해서 userinfo가져와서 zustand에 저장
  /////////////////////////////////////////////
  useEffect(() => {
    const getLoginInfo = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/auth/user-info`, {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json'
          }
        });

        const USER_ID = response.data.data.USER_ID;
        const ROLE = response.data.data.ROLE;
        if (ROLE === 'ROLE_CENTER' || ROLE === 'ROLE_VOLUNTEER') {
          setLoginInfo(USER_ID, ROLE);
        }
      } catch (error) {
        console.error('로그인 정보 가져오기 실패:', error);
      }
    };

    if (token) {
      getLoginInfo();
    }
  }, [token, setLoginInfo]);

  //////////////////////////////////////////////
  // 응답으로 받은 관심기관 리스트를 zustand에 저장
  //////////////////////////////////////////////
  useEffect(() => {
    const getInterestCenter = async () => {
      try {
        const response = await axiosInstance.get('/api/interest-centers');
        const centerList = response.data;
        console.log('관심기관 리스트', centerList);
        setCenterIds(centerList);
      } catch (error) {
        console.error('로그인 정보 가져오기 실패:', error);
      }
    };
    if (loginType === 'ROLE_VOLUNTEER') {
      getInterestCenter();
    }
  }, [loginType]);

  return (
    <Wrapper>
      <MainBanner></MainBanner>
      {loginType === 'ROLE_CENTER' && <WriteAidReqButtonComponent></WriteAidReqButtonComponent>}
      <AidRqRecentList></AidRqRecentList>
      <RankAndCommu>
        <Ranking></Ranking>
        <Community></Community>
      </RankAndCommu>
    </Wrapper>
  );
}
