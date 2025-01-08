import styled from 'styled-components';

import theme from '@/styles/theme';
import Button from '@/components/button';

export const Wrapper = styled.div`
  margin-top: 10px;
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: white;
  padding: 50px;

  & > button {
    width: 220px;
    height: 53px;
    color: white;
    font-weight: 600;
    border-radius: 12px;
    border: none;
    outline: none;
    background-color: #2382ff;
    font-size: 1rem;
  }
`;

export const ThirdLine = styled.div`
  padding-top: 16px;
  display: flex;
  gap: 20px;

  & > div:nth-of-type(1) {
    width: 50%;
  }

  & > div:nth-of-type(2) {
    flex: 1;
  }

  & > div {
    & > p {
      font-size: 12px;
      padding-bottom: 10px;
    }
  }
`;

export const FourthLine = styled.div`
  padding-top: 16px;
  display: flex;
  gap: 20px;

  & > div:nth-of-type(1) {
    width: 50%;
  }

  & > div:nth-of-type(2) {
    flex: 1;
  }

  & > div {
    & > p {
      font-size: 12px;
      padding-bottom: 10px;
    }
  }
`;

export const TextAreaContainer = styled.div`
  padding-top: 16px;
  & > p {
    font-size: 12px;
    padding-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const ModifyInfoBtn = styled(Button)`
  width: 220px;
  height: 53px;
  font-weight: 600;
  border-radius: 12px;
  font-size: 14px;
`;
