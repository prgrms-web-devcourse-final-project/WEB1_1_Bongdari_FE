import theme from '@/styles/theme';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  padding: 100px 0 0 0;
`;

export const EmptyButton = styled.button`
  width: 221px;
  height: 53px;
  border: 1px solid ${theme.pointColor.event};
  border-radius: 13px;
  background-color: #ffffff;
  color: ${theme.pointColor.event};
  font-size: ${theme.fontSize.eighthSize};
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:active {
    color: ${theme.pointColor.clicked};
    border: 1px solid ${theme.pointColor.clicked};
  }
`;
