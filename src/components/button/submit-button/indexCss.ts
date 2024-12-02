import styled from 'styled-components';
import { submitButton } from '@/styles/theme';
import theme from '@/styles/theme';

export type ButtonVariant = 'disabled' | 'enabledOne' | 'enabledTwo';

const SubmitButtonComponent = styled.button<{
  variant?: ButtonVariant;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
}>`
  border-radius: ${submitButton.borderRadius};
  width: ${({ width }) => width || '220px'};
  height: ${({ height }) => height || ''};
  font-size: ${({ fontSize }) => fontSize || theme.fontSize.seventhSize};
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  cursor: ${({ variant }) => (variant === 'disabled' ? 'not-allowed' : 'pointer')};

  padding: 0.87rem;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  // 기본 스타일
  background-color: ${({ variant }) =>
    variant === 'disabled'
      ? submitButton.variants.disabled.backgroundColor
      : variant === 'enabledOne'
        ? submitButton.variants.enabledOne.backgroundColor
        : submitButton.variants.enabledTwo.backgroundColor};

  color: ${({ variant }) =>
    variant === 'disabled'
      ? submitButton.variants.disabled.color
      : variant === 'enabledOne'
        ? submitButton.variants.enabledOne.color
        : submitButton.variants.enabledTwo.color};

  border: ${({ variant }) => (variant === 'enabledTwo' ? submitButton.variants.enabledTwo.border : 'none')};

  pointer-events: ${({ variant }) => (variant === 'disabled' ? 'none' : 'auto')};

  // Hover 상태
  &:hover {
    ${({ variant }) =>
      variant === 'enabledOne' &&
      `
        background-color: ${theme.pointColor.event};
      `}

    ${({ variant }) =>
      variant === 'enabledTwo' &&
      `
        border-color: ${theme.pointColor.event};
        color: ${theme.pointColor.event};
      `}
  }

  // Active 상태
  &:active {
    ${({ variant }) =>
      variant === 'enabledOne' &&
      `
        background-color: ${theme.pointColor.clicked};
      `}

    ${({ variant }) =>
      variant === 'enabledTwo' &&
      `
        border-color: ${theme.pointColor.clicked};
        color: ${theme.pointColor.clicked};
      `}
  }
`;

export default SubmitButtonComponent;
