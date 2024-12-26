import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  padding: 100px 0 0 0;
`;

export const EditAidRqButton = styled(Button)`
  width: 221px;
  height: 53px;
  border-radius: 13px;
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 600;
  transition: 0.3s;
`;

export const AdjustmentButton = styled(Button)`
  width: 221px;
  height: 53px;
  border-radius: 13px;
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 600;
`;
