import Button from '@/components/button';
import theme from '@/styles/theme';
import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 460px;
  width: 90%;
  margin: 0 auto;
  padding: 151px 0;

  .title {
    display: inline-block;
    font-size: ${Theme.fontSize.secondSize};
    font-weight: 600;
    padding: 40px 0 15px;
  }
`;

export const CommonLoginSection = styled.section`
  display: flex;
  flex-direction: column;

  & > form {
    padding: 30px 0 38px 0;
  }

  & > form > div > label {
    display: inline-block;
    color: #6f6f6f;
    font-size: ${theme.fontSize.ninthSize};
    font-weight: 600;
    padding: 11px 0 9px 7px;
  }

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    padding: 28px 0 100px 0;
  }

  & a {
    color: #717171;
    font-size: ${theme.fontSize.seventhSize};
  }
`;

export const SocialLoginSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 9px;

  & > p {
    color: #848484;
    font-size: ${theme.fontSize.eighthSize};
    padding: 17px 8px;
  }
`;

export const LoginButton = styled(Button)`
  width: 100%;
  height: 53px;
  color: white;
  font-size: ${theme.fontSize.seventhSize};
  border-radius: 10px;
`;

export const NaverLoginButton = styled.button`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 53px;
  background-color: #00bf19;
  color: white;
  border-radius: 12px;
  font-size: ${theme.fontSize.seventhSize};
  cursor: pointer;
  border: none;
`;

export const KakaoLoginButton = styled.button`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 53px;
  background-color: #fddc3f;
  color: #3a2929;
  border-radius: 12px;
  font-size: ${theme.fontSize.seventhSize};
  cursor: pointer;
  border: none;
`;
