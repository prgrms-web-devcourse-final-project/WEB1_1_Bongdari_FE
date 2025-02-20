import { useEffect } from 'react';

import MainBanner from '@/features/main-banner';
import { RankAndCommu, Wrapper } from './MainpageCss';
import WriteAidReqButtonComponent from '@/components/write-aidreq-button';
import AidRqRecentList from './_components/aidrq-recent-list';
import Ranking from './_components/ranking';
import Community from './_components/community';
import { useLoginStore } from '@/store/stores/login/loginStore';
import axiosInstance from '@/api/apis';
import useInterestStore from '@/store/stores/interest-center/interestStore';

export default function MainPage() {
  const token = localStorage.getItem('token');

  const loginType = useLoginStore((state) => state.loginType);
  const setLoginInfo = useLoginStore((state) => state.setLoginInfo);
  const clearLoginInfo = useLoginStore((state) => state.clearLoginInfo);
  const setCenterIds = useInterestStore((state) => state.setCenterIds);

  ////////////////////////////////
  //로그아웃 시에 LoginInfo초기화//
  ///////////////////////////////
  useEffect(() => {
    // const getLoginInfo = () => {
    //   try {
    if (!token) {
      clearLoginInfo();
      return;
    }

    //     // Bearer 제거
    //     const actualToken = token.replace('Bearer ', '');

    //     // JWT 디코딩 (payload 부분)
    //     const payload = JSON.parse(atob(actualToken.split('.')[1]));

    //     const USER_ID = payload.userId;
    //     const ROLE = payload.role;

    //     if (ROLE === 'ROLE_CENTER' || ROLE === 'ROLE_VOLUNTEER') {
    //       setLoginInfo(USER_ID, ROLE);
    //     }
    //   } catch (error) {
    //     console.error('토큰 디코딩 실패:', error);
    //   }
    // };

    // getLoginInfo();
  }, [token, setLoginInfo]);

  //////////////////////////////////////////////
  // 응답으로 받은 관심기관 리스트를 zustand에 저장
  //////////////////////////////////////////////
  useEffect(() => {
    const getInterestCenter = async () => {
      try {
        const response = await axiosInstance.get('/api/interest-centers');
        const centerList = response.data;
        setCenterIds(centerList);
      } catch (error) {
        console.error('관심기관 리스트 가져오기 실패:', error);
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
