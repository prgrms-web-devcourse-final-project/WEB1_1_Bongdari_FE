import { useLoginStore } from '@/store/stores/login/loginStore';
import { PersonLoginCss } from './indexCss';
import { testLoginPerson } from './logic/testLoginPerson';

const PersonLogin = () => {
  const setLoginInfo = useLoginStore((state) => state.setLoginInfo);

  const onClickNaver = async () => {
    // window.location.href = `${import.meta.env.VITE_APP_BASE_URL}/oauth2/authorization/naver`;

    //테스트용 함수
    try {
      await testLoginPerson();
      setLoginInfo('1', 'person');
    } catch (error) {
      console.error('Login failed:', error);
    }
    //테스트용 함수
  };

  return (
    <PersonLoginCss>
      <i className="helloLogin">손모아와 함께 봉사활동을 시작해볼까요?</i>
      <button className="naverLoginBtn" onClick={onClickNaver}>
        <img src="/assets/imgs/naver-logo.svg" alt="" />
        <i>네이버로 시작하기</i>
      </button>
    </PersonLoginCss>
  );
};
export default PersonLogin;
