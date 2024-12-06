import { useEffect } from 'react';

import MainBanner from '@/features/main-banner';
import { RankAndCommu, Wrapper } from './MainpageCss';
import WriteAidReqButtonComponent from '@/components/write-aidreq-button';
import AidRqRecentList from './_components/aidrq-recent-list';
import Ranking from './_components/ranking';
import Community from './_components/community';
import { useLoginStore } from '@/store/stores/login/loginStore';
import axiosInstance from '@/api/apis';

export default function MainPage() {
  const loginType = useLoginStore((state) => state.loginType);
  const setLoginInfo = useLoginStore((state) => state.setLoginInfo);

  // const parseJWT = (token: string) => {
  //   try {
  //     const base64Payload = token.split('.')[1];
  //     const payload = JSON.parse(atob(base64Payload));

  //     return {
  //       id: payload.id,
  //       // ROLE_CENTER -> center, ROLE_PERSON -> person 으로 변환
  //       role: payload.role.replace('ROLE_', '').toLowerCase()
  //     };
  //   } catch (error) {
  //     console.error('토큰 파싱 실패:', error);
  //     return null;
  //   }
  // };

  useEffect(() => {
    const getLoginInfo = async () => {
      try {
        const response = await axiosInstance.get('/api/token/userinfo');

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

    //   useEffect(() => {
    //     const token = Cookies.get('ACCESS');
    //     console.log('token:', token);
    //     if (token) setLoginInfo(parseJWT(token)?.id, parseJWT(token)?.role);
  }, []);

  return (
    <Wrapper>
      <MainBanner></MainBanner>
      {loginType === 'center' && <WriteAidReqButtonComponent></WriteAidReqButtonComponent>}
      <AidRqRecentList></AidRqRecentList>
      <RankAndCommu>
        <Ranking></Ranking>
        <Community></Community>
      </RankAndCommu>
    </Wrapper>
  );
}
