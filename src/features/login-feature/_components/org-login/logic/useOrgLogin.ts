import { useState } from 'react';
import { testLoginCenter } from './testLoginCenter';
import { useLoginStore } from '@/store/stores/login/loginStore';

interface useOrgLoginReturn {
  idErr: string;
  pwdErr: string;
  checkId: (id: string) => void;
  checkPwd: (pwd: string) => void;
  onClickFindAcount: () => void;
  onClickLogin: () => void;
  onClickFirstVisit: () => void;
}

export const useOrgLogin = (): useOrgLoginReturn => {
  const setLoginInfo = useLoginStore((state) => state.setLoginInfo);

  const [id, setId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [idErr, setIdErr] = useState<string>('');
  const [pwdErr, setPwdErr] = useState<string>('');

  // id formatCheck
  const checkId = (id: string) => {
    setId(id);
    if (id.length < 4 || id.length > 20) setIdErr('4자 이상 20자 이하로 작성해주세요');
    else if (!/^[a-zA-Z0-9_]+$/.test(id)) setIdErr('알파벳, 숫자, _ 등만 가능합니다');
    else if (!/^[a-zA-Z]/.test(id)) setIdErr('id의 첫 문자는 알파벳으로 설정해주세요');
    else setIdErr('');
  };

  // pwd formatCheck
  const checkPwd = (pwd: string) => {
    setPwd(pwd);
    if (pwd.length < 8 || pwd.length > 20) setPwdErr('8자 이상 20자 이내로 작성해주세요');
    else setPwdErr('');
  };

  const onClickFindAcount = () => {
    console.log('계정찾기 페이지로 이동');
  };
  const onClickLogin = async () => {
    if (idErr !== '' || pwdErr !== '') console.log('id와 pwd 형식을 확인해주세요.');
    else {
      console.log(id, pwd, '로그인시도');

      //테스트용 함수
      try {
        await testLoginCenter();
        setLoginInfo('B8473384-AE17-11EF-AA15-0A855994FB4B', 'center');
      } catch (error) {
        console.error('Login failed:', error);
      }
      //테스트용 함수
    }
  };
  const onClickFirstVisit = () => {
    console.log('기업 첫 방문 페이지로 이동');
  };

  return {
    idErr,
    pwdErr,
    checkId,
    checkPwd,
    onClickFindAcount,
    onClickLogin,
    onClickFirstVisit
  };
};
