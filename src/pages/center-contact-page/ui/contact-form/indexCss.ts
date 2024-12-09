import theme from '@/styles/theme';
import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const FormTitle = styled.h1`
  font-size: ${theme.fontSize.secondSize};
  font-weight: 600;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormGroup = styled.div<{ flex?: number }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: ${(props) => props.flex || 'auto'};
`;

export const FormRow = styled.div`
  display: flex;
`;

export const Label = styled.label`
  font-size: ${theme.fontSize.ninthSize};
  color: #373737;
`;

export const ImageUploadArea = styled.div`
  width: 100%;
  height: 146px;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UploadIcon = styled.span`
  font-size: ${theme.fontSize.fifthSize};
  color: #959595;
`;
