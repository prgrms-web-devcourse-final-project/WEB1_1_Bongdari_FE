import styled from 'styled-components';
import theme from '@/styles/theme';
import Button from '@/components/button';

export const Wrapper = styled.div`
  max-width: 460px;
  width: 90%;
  margin: 0 auto;
  padding: 151px 0;

  .title {
    display: inline-block;
    font-size: ${theme.fontSize.secondSize};
    font-weight: 600;
    padding: 40px 0 15px;
  }
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 30px;

  & > div > label,
  & > div > p {
    font-size: ${theme.fontSize.ninthSize};
    color: #6f6f6f;
    font-weight: 600;
    display: inline-block;
    padding: 0 0 9px 8px;
  }
`;

export const IDWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;

  & > div {
    flex: 1; // 남은 공간 모두 차지
  }

  & > div > label {
    font-size: ${theme.fontSize.ninthSize};
    color: #6f6f6f;
    font-weight: 600;
    display: inline-block;
    padding: 0 0 9px 8px;
  }
`;

export const SignupButton = styled(Button)`
  font-size: ${theme.fontSize.seventhSize};
  border-radius: 10px;
  width: 229px;
  height: 53px;
  margin: auto;
  display: block;
`;

export const DuplicateCheck = styled(Button)`
  width: 95px;
  height: 50px;
  border-radius: 10px;
  font-size: ${theme.fontSize.eighthSize};
`;

export const TabWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 70px;
`;

export const TabButton = styled(Button)<{ isActive?: boolean }>`
  flex: 1;
  height: 53px;
  border-radius: 10px;
  font-size: ${theme.fontSize.seventhSize};
`;

export const ValidationMessage = styled.p<{ $isSuccess?: boolean }>`
  font-size: ${theme.fontSize.ninthSize};
  color: ${({ $isSuccess }) => ($isSuccess ? '#2D8E39' : '#FF0000')}; // 성공시 초록색
  margin: 0 0 0 8px;
`;
