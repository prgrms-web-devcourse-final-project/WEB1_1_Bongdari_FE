// import { useLoginStore } from '@/store/stores/login/loginStore';
// import { handleLoginPerson } from '@/store/queries/login/useLoginVolunteer';
import { PersonLoginCss } from './indexCss';

const PersonLogin = () => {
  // const setLoginInfo = useLoginStore((state) => state.setLoginInfo);

  const onClickNaver = async () => {
    window.location.href = `${import.meta.env.VITE_APP_BASE_URL}/oauth2/authorization/naver`;
    // setLoginInfo('persontestid', 'person');

    //테스트용 함수
    // try {
    //   await handleLoginPerson();
    //   setLoginInfo('9a524bd3-2542-47f1-987f-8141704a6590', 'person');
    // } catch (error) {
    //   console.error('Login failed:', error);
    // }
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
