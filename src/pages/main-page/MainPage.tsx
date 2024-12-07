import { useEffect } from 'react';

import MainBanner from '@/features/main-banner';
import { RankAndCommu, Wrapper } from './MainpageCss';
import WriteAidReqButtonComponent from '@/components/write-aidreq-button';
import AidRqRecentList from './_components/aidrq-recent-list';
import Ranking from './_components/ranking';
import Community from './_components/community';
import { useLoginStore } from '@/store/stores/login/loginStore';
// import axiosInstance from '@/api/apis';
import LocalTestBox from './_components/localTestBox';
import LocalTestBoxVolun from './_components/localTestBoxVolun';

export default function MainPage() {
  const loginType = useLoginStore((state) => state.loginType);
  // const setLoginInfo = useLoginStore((state) => state.setLoginInfo);

  useEffect(() => {
    //
    //
    //
    //로컬개발환경에서 주석을 달고 사용하세요.
    // const getLoginInfo = async () => {
    //   try {
    //     const response = await axiosInstance.get('/api/token/userinfo');
    //     // 응답으로 받은 로그인 정보를 zustand에 저장
    //     console.log(response.data);
    //     const USER_ID = response.data.USER_ID;
    //     const ROLE = response.data.ROLE;
    //     setLoginInfo(USER_ID, ROLE);
    //   } catch (error) {
    //     console.error('로그인 정보 가져오기 실패:', error);
    //   }
    // };
    // getLoginInfo();
  }, []);

  return (
    <Wrapper>
      <LocalTestBox></LocalTestBox>
      <LocalTestBoxVolun></LocalTestBoxVolun>
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
