import theme from '@/styles/theme';
import styled from 'styled-components';

export const EditFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 60%;
  max-width: 565px;
`;

export const EditItem = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const EditLabel = styled.label`
  font-size: ${theme.fontSize.eighthSize};
  color: #656565;
  font-weight: 600;
`;

export const EditItem_TextArea = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: start;
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: ${theme.fontSize.ninthSize};
  margin-top: 4px;
  margin-left: 4px;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  outline: none;
  border: none;
  width: 480px;
  height: 38px;
  line-height: 16px;
  padding: 15px;
  color: ${theme.inputGray.color};
  background-color: ${theme.inputGray.variants.notFocused.backgroundColor};
  border-radius: ${theme.inputGray.borderRadius};
  font-size: ${theme.fontSize.seventhSize};

  &::placeholder {
    color: ${theme.inputGray.placeholderColor};
  }
  &:focus-within {
    background-color: ${theme.inputGray.variants.focused.backgroundColor};
    border: none;
  }
`;

export const CenterIntroTextArea = styled.textarea`
  box-sizing: border-box;
  outline: none;
  resize: none;
  width: 480px;
  height: 220px;
  line-height: 16px;
  font-weight: 400;
  padding: 15px;

  font-size: ${theme.fontSize.seventhSize};
  color: ${theme.inputGray.color};
  background-color: ${theme.inputGray.variants.notFocused.backgroundColor};
  border: none;
  border-radius: ${theme.inputGray.borderRadius};

  &::placeholder {
    color: ${theme.inputGray.placeholderColor};
  }
  &:focus-within {
    background-color: ${theme.inputGray.variants.focused.backgroundColor};
    border: none;
  }
`;
