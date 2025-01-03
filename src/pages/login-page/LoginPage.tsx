// import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '@/components/inputBox';
import {
  CommonLoginSection,
  KakaoLoginButton,
  LoginButton,
  NaverLoginButton,
  SocialLoginSection,
  Wrapper
} from './LoginPageCss';

export default function LoginPage() {
  return (
    <Wrapper>
      <i className="title">손모아 로그인</i>
      <CommonLoginSection>
        <form onSubmit={() => console.log('로그인폼 제출')}>
          <div>
            <label htmlFor="idInput">아이디</label>
            <InputBox colortype="white" textType="text" placeholder="아이디를 입력해주세요." />
          </div>
          <div>
            <label htmlFor="pwInput">비밀번호</label>
            <InputBox colortype="white" textType="password" placeholder="비밀번호를 입력해주세요." />
          </div>
        </form>

        <LoginButton
          label="로그인"
          type="blue"
          buttonType="submit"
          onClick={() => console.log('일반 로그인버튼 클릭')}
        />
        <div>
          <Link to="/signup">회원가입</Link>
          <Link to="/find-account">계정찾기</Link>
        </div>
      </CommonLoginSection>

      <SocialLoginSection>
        <NaverLoginButton label="네이버로 시작하기" onClick={() => console.log('네이버로그인버튼클릭릭')}>
          <img src="/assets/imgs/naver.svg" alt="네이버소셜로그인버튼" />
        </NaverLoginButton>
        <KakaoLoginButton label="카카오로 시작하기" onClick={() => console.log('카카오로그인버튼클릭릭')}>
          <img src="/assets/imgs/kakao.svg" alt="카카오소셜로그인버튼" />
        </KakaoLoginButton>
        <p>소셜로그인은 봉사자로만 회원가입이 가능하다는 것을 알려주는 문구</p>
      </SocialLoginSection>
    </Wrapper>
  );
}
