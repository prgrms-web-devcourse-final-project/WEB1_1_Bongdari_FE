import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 600;
`;

export const GoToButton = styled.button`
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
