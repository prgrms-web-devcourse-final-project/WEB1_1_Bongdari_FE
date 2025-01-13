import { handleLogin } from '@/store/queries/login-query/useNormalLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useLoginStore } from '@/store/stores/login/loginStore';

interface useReturn {
  idErr: string;
  pwdErr: string;
  checkId: (id: string) => void;
  checkPwd: (pwd: string) => void;
  onClickFindAcount: () => void;
  onClickLogin: () => void;
  onClickFirstVisit: () => void;
}

export const useLogin = (): useReturn => {
  // const setLoginInfo = useLoginStore((state) => state.setLoginInfo);

  const navigate = useNavigate();
  const [id, setId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [idErr, setIdErr] = useState<string>('');
  const [pwdErr, setPwdErr] = useState<string>('');

  // id formatCheck
  const checkId = (id: string) => {
    setId(id);
    if (id.length < 4 || id.length > 50) setIdErr('4자 이상 50자 이하로 작성해주세요');
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
    if (idErr !== '' || pwdErr !== '') throw new Error('id와 pwd 형식을 확인해주세요.');
    else {
      try {
        //현재 -> 토큰을 그대로 받아서 session에 넣고 사용
        //나중 -> 쿠키에 단기토큰 넣고 그거로 token을 가져오는 api호출 후, session에 넣고 사용
        const response = await handleLogin(id, pwd);
        const token = response.headers['authorization'];

        //token을 세션스토리지에 저장
        sessionStorage.setItem('token', token);

        // // setLoginInfo('centertestid', 'center');
        navigate('/main', {
          state: {
            token: token
          }
        });
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
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
