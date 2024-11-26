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
