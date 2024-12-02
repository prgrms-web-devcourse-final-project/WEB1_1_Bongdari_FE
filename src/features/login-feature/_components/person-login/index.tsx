import axios from 'axios';
import { PersonLoginCss } from './indexCss';

const PersonLogin = () => {
  const onClickNaver = async () => {
    try {
      await axios.post(
        'http://54.180.201.20:8080/api/volunteer/sign-in/oauth/naver',
        {},
        {
          withCredentials: true // 쿠키를 주고받을 수 있도록 설정
        }
      );
      window.location.href = '/';
    } catch (error) {
      console.error('네이버 로그인 요청 실패:', error);
    }
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
