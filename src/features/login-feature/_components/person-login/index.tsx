import { PersonLoginCss } from './indexCss';

const PersonLogin = () => {
  const onClickNaver = () => {
    console.log('네이버로그인으로 리디렉트');
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
