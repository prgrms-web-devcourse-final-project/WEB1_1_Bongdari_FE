import styled from 'styled-components';
import theme from '@/styles/theme';

export type ModalVariant = 'big' | 'small';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

export const ModalContainer = styled.div<{ variant: ModalVariant; width?: string; padding?: string }>`
  position: relative;
  background-color: #ffffff;
  border-radius: ${theme.modal.borderRadius};
  width: ${({ width }) => width || '90%'};
  max-width: ${({ variant }) =>
    variant === 'big' ? theme.modal.variants.big.width : theme.modal.variants.small.width};
  height: ${({ variant }) => (variant === 'big' ? theme.modal.variants.big.height : theme.modal.variants.small.height)};
  flex-direction: column;
  z-index: 100;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  width: 42px;
  height: 42px;
  top: 0;
  right: -4rem;

  @media (max-width: 1000px) {
    top: 4px;
    right: 4px;
    background-color: transparent;
  }
`;
