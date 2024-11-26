import theme from '@/styles/theme';
import styled from 'styled-components';

export const RegisterBarContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const RegisterButton = styled.button`
  width: 221px;
  height: 53px;
  border: 1px solid ${theme.pointColor.clicked};
  border-radius: 13px;
  background-color: #ffffff;
  color: ${theme.pointColor.clicked};
  font-size: ${theme.fontSize.eighthSize};
  cursor: pointer;
  font-weight: 600;
`;
