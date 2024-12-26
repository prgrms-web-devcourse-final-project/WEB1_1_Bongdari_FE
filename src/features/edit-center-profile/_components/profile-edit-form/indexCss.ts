import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const EditFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const NickNameSection = styled.section`
  border: ${theme.box.section.border};
  background-color: ${theme.box.section.backgroundColor};
  border-radius: ${theme.box.section.borderRadius};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 56px 134px 46px 46px;
  width: 100%;
  box-sizing: border-box;
  gap: 14px;
`;

export const EtcProfileSection = styled.section`
  border: ${theme.box.section.border};
  background-color: ${theme.box.section.backgroundColor};
  border-radius: ${theme.box.section.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 33px 133px 42px 57px;
  width: 100%;
  box-sizing: border-box;
  gap: 12px;
`;

export const EditItem = styled.div`
  display: flex;
  gap: 23px;
  align-items: center;
  width: 100%;
`;

export const EditLabel = styled.label`
  font-size: ${theme.fontSize.eighthSize};
  color: #656565;
  font-weight: 600;
`;

export const EditItem_TextArea = styled.div`
  display: flex;
  gap: 35px;
  align-items: start;
  width: 100%;
`;

export const TextAreaWrapper = styled.div`
  flex: 1;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: ${theme.fontSize.ninthSize};
  margin-top: 4px;
  margin-left: 4px;
  padding-bottom: 10px;
`;

export const InputWrapper = styled.div`
  flex: 1;
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  outline: none;
  border: none;
  width: 100%;
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
  width: 100%;
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

export const EditNickNameButton = styled(Button)`
  width: 111px;
  height: 37px;
  border-radius: 13px;
  font-weight: 600;
  font-size: ${theme.fontSize.eighthSize};
`;

export const EtcButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 20px;
`;
export const EditEtcProfileButton = styled(Button)`
  width: 221px;
  height: 53px;
  border-radius: 13px;
  font-weight: 600;
  font-size: ${theme.fontSize.eighthSize};
`;
