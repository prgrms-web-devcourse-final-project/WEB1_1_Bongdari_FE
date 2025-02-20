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
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
import { handleKakaoLogin, handleNaverLogin } from './logic/useSocialLogin';

export default function LoginPage() {
  const { idErr, pwdErr, checkId, checkPwd, onClickLogin } = useLogin();
  const { openAlert } = useAlertDialog();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onClickLogin();
      openAlert('로그인이 성공적으로 완료되었습니다.');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'id와 pwd 형식을 확인해주세요.') {
          openAlert(error.message);
        } else {
          openAlert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
        console.error('로그인 실패:', error);
      }
    }
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
