import theme from '@/styles/theme';
import styled from 'styled-components';

const OtherButtonComponent = styled.button<{
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  bgColor?: string;
  color?: string;
  width?: string;
  fontWeight?: string;
  disabled?: boolean;
}>`
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || theme.submitButton.borderRadius};
  font-size: ${({ fontSize }) => fontSize || theme.fontSize.seventhSize};
  background-color: ${({ bgColor }) => bgColor || theme.pointColor.Regular};
  color: ${({ color }) => color || theme.submitButton.variants.enabledOne.color};
  width: ${({ width }) => width || '167px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'medium'};

  padding: 0.87rem;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  &:hover {
    background-color: ${({ disabled, bgColor }) => (disabled ? bgColor : theme.pointColor.event)}; // hover 상태
  }

  &:active {
    background-color: ${({ disabled, bgColor }) => (disabled ? bgColor : theme.pointColor.clicked)}; // clicked 상태
  }
`;

export default OtherButtonComponent;
