import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 14px;
  justify-content: center;
  padding: 100px 0 0 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-top: 1rem;
  }
`;

export const EditAidRqButton = styled(Button)`
  width: 221px;
  height: 53px;
  border-radius: 13px;
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 600;
  transition: 0.3s;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const AdjustmentButton = styled(Button)`
  width: 221px;
  height: 53px;
  border-radius: 13px;
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 600;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  font-size: ${theme.fontSize.eighthSize};
  color: #a1a1a1;
  font-weight: 600;
  cursor: pointer;
  bottom: -44px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
