import { PersonLoginCss } from './indexCss';

const PersonLogin = ({
  onClickNaver
}: {
  onClickNaver: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
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
