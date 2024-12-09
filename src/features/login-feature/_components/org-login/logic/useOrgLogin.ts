import { useState } from 'react';
import { testLoginCenter } from './testLoginCenter';
import { useNavigate } from 'react-router-dom';
// import { useLoginStore } from '@/store/stores/login/loginStore';

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
  // const setLoginInfo = useLoginStore((state) => state.setLoginInfo);

  const navigate = useNavigate();
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

      try {
        const response = await testLoginCenter(id, pwd);
        console.log(response);
        // setLoginInfo('centertestid', 'center');
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  };
  const onClickFirstVisit = () => {
    navigate('/center-contact');
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
