import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const RegisterBarContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const RegisterButton = styled(Button)`
  width: 221px;
  height: 53px;
  border-radius: 13px;
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 600;
  transition: 0.3s;

  @media (max-width: 1000px) {
    margin: auto;
    width: 100%;
  }
`;

export const RegisterInput = styled.input`
  outline: none;
  max-width: 776px;
  width: 100%;
  height: 53px;
  padding: 15px;
  border: none;
  border-radius: ${theme.inputGray.borderRadius};
  font-size: ${theme.fontSize.seventhSize};
  line-height: 16px;
  background-color: ${theme.inputGray.variants.notFocused.backgroundColor};
  color: ${theme.inputGray.color};

  &::placeholder {
    color: ${theme.inputGray.placeholderColor};
  }

  &:focus-within {
    background-color: ${theme.inputGray.variants.focused.backgroundColor};
    border: none;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
`;
