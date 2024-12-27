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
// import LocalTestBox from './_components/localTestBox';
// import LocalTestBoxVolun from './_components/localTestBoxVolun';

export default function MainPage() {
  const loginType = useLoginStore((state) => state.loginType);
  const setLoginInfo = useLoginStore((state) => state.setLoginInfo);
  const setCenterIds = useInterestStore((state) => state.setCenterIds);

  useEffect(() => {
    // 응답으로 받은 로그인 정보를 zustand에 저장
    const getLoginInfo = async () => {
      try {
        const response = await axiosInstance.get('/api/token/userinfo');
        const USER_ID = response.data.USER_ID;
        const ROLE = response.data.ROLE;
        if (ROLE === 'ROLE_CENTER' || ROLE === 'ROLE_VOLUNTEER') setLoginInfo(USER_ID, ROLE);
      } catch (error) {
        console.error('로그인 정보 가져오기 실패:', error);
      }
    };
    getLoginInfo();
  }, []);

  useEffect(() => {
    // 응답으로 받은 관심기관 리스트를 zustand에 저장
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
      {/* <LocalTestBox></LocalTestBox>
      <LocalTestBoxVolun></LocalTestBoxVolun> */}
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
