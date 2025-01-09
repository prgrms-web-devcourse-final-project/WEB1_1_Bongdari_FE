import { Link } from 'react-router-dom';
import InputBox from '@/components/inputBox';
import {
  CommonLoginSection,
  ErrorSpan,
  KakaoLoginButton,
  LoginButton,
  NaverLoginButton,
  SocialLoginSection,
  Wrapper
} from './LoginPageCss';
import { useLogin } from './logic/useLogin';

export default function LoginPage() {
  const { idErr, pwdErr, checkId, checkPwd, onClickLogin } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClickLogin();
  };

  // 소셜 로그인 핸들러
  const handleNaverLogin = () => {
    window.location.href = `${import.meta.env.VITE_APP_BASE_URL}/oauth2/authorization/naver`;
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인 시도');
  };

  return (
    <Wrapper>
      <i className="title">손모아 로그인</i>
      <CommonLoginSection>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="idInput">아이디</label>
            <InputBox colortype="white" textType="text" placeholder="아이디를 입력해주세요." setFunc={checkId} />
            {idErr && <ErrorSpan className="error-message">{idErr}</ErrorSpan>}
          </div>
          <div>
            <label htmlFor="pwInput">비밀번호</label>
            <InputBox colortype="white" textType="password" placeholder="비밀번호를 입력해주세요." setFunc={checkPwd} />
            {pwdErr && <ErrorSpan className="error-message">{pwdErr}</ErrorSpan>}
          </div>
          <LoginButton label="로그인" type="blue" buttonType="submit" />
        </form>

        <div>
          <Link to="/signup">회원가입</Link>
          <Link to="/find-account">계정찾기</Link>
        </div>
      </CommonLoginSection>

      <SocialLoginSection>
        <NaverLoginButton onClick={handleNaverLogin}>
          <img src="/assets/imgs/naver.svg" alt="네이버소셜로그인버튼" />
          네이버로 시작하기
        </NaverLoginButton>
        <KakaoLoginButton onClick={handleKakaoLogin}>
          <img src="/assets/imgs/kakao.svg" alt="카카오소셜로그인버튼" />
          카카오로 시작하기
        </KakaoLoginButton>
        <p>소셜로그인은 봉사자로만 회원가입이 가능합니다.</p>
      </SocialLoginSection>
    </Wrapper>
  );
}
