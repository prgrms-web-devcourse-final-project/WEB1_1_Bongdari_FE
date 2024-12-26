import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

const buttonTypes = {
  blue: css`
    background-color: ${theme.pointColor.Regular};
    color: white;
    border: none;

    &:hover {
      background-color: ${theme.pointColor.event};
    }

    &:active {
      background-color: ${theme.pointColor.clicked};
    }

    &:disabled {
      background-color: #e2e2e2;
      color: #adadad;
    }
  `,

  white: css`
    background-color: white;
    color: ${theme.pointColor.Regular};
    border: 1px solid ${theme.pointColor.Regular};

    &:hover {
      border: 1px solid ${theme.pointColor.event};
      color: ${theme.pointColor.event};
    }

    &:active {
      border: 1px solid ${theme.pointColor.clicked};
      color: ${theme.pointColor.clicked};
    }

    &:disabled {
      border: 1px solid #adadad;
      color: #adadad;
    }
  `
};

const ButtonComponent = styled.button<{ $type: 'blue' | 'white' }>`
  transition: 0.3s;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  ${({ $type }) => buttonTypes[$type]}
`;

export default ButtonComponent;
