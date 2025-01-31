import Button from '@/components/button';
import TextArea from '@/components/textArea';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 460px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 187px 0;
  gap: 50px;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
  padding-left: 8px;

  & > h1 {
    font-size: ${theme.fontSize.secondSize};
    font-weight: 600;
  }

  & > p {
    font-size: ${theme.fontSize.seventhSize};
    font-weight: 500;
  }
`;

export const DetailInfoForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  & label {
    padding-left: 7px;
    font-size: ${theme.fontSize.ninthSize};
    font-weight: 600;
    color: #6f6f6f;
  }
`;

export const DetailInfo = styled(TextArea)`
  height: 150px;
`;

export const SubmitButton = styled(Button)`
  max-width: 460px;
  width: 100%;
  border-radius: 10px;
  height: 53px;
  margin-top: 50px;
`;

export const LogoutButton = styled(Button)`
  max-width: 460px;
  width: 100%;
  border-radius: 10px;
  height: 53px;
  margin-top: 5px;
`;
