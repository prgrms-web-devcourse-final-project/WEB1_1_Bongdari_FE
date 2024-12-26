import Button from '@/components/button';
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

export const GoToButton = styled(Button)`
  width: 221px;
  height: 53px;
  border-radius: 13px;
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 600;
  transition: 0.3s;
`;
