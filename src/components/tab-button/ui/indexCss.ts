import theme from '@/styles/theme';
import styled from 'styled-components';

export type TabButtonVariant = 'clicked' | 'notClicked';

const TabButtonComponent = styled.button<{
  $variant?: TabButtonVariant;
  $borderRadius?: string;
  $fontSize?: string;
  $width?: string;
  $height?: string;
  $fontWeight?: string;
}>`
  border-radius: ${({ $borderRadius }) => $borderRadius || '10px'};
  font-size: ${({ $fontSize }) => $fontSize || theme.fontSize.seventhSize};
  color: ${({ color }) => color || theme.tabMenu.variants.notClicked.color};
  width: ${({ $width }) => $width || '167px'};
  height: ${({ $height }) => $height || '3rem'};
  font-weight: ${({ $fontWeight }) => $fontWeight || 'medium'};
  cursor: pointer;

  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  // 기본 스타일
  background-color: ${({ $variant }) =>
    $variant === 'clicked'
      ? theme.tabMenu.variants.clicked.backgroundColor
      : $variant === 'notClicked'
        ? theme.tabMenu.variants.notClicked.backgroundColor
        : theme.tabMenu.variants.clicked.backgroundColor};

  color: ${({ $variant }) =>
    $variant === 'clicked' ? theme.tabMenu.variants.clicked.color : theme.tabMenu.variants.notClicked.color};

  border: ${({ $variant }) => ($variant === 'clicked' ? 'none' : theme.tabMenu.variants.notClicked.border)};

  // Hover 상태
  &:hover {
    ${({ $variant }) =>
      $variant === 'clicked' &&
      `
        background-color: ${theme.pointColor.event};
      `}

    ${({ $variant }) =>
      $variant === 'notClicked' &&
      `
        border-color: none;
        background-color: ${theme.pointColor.event};
        color: ${theme.tabMenu.variants.clicked.color};
      `}
  }

  // Active 상태
  &:active {
    ${({ $variant }) =>
      $variant === 'clicked' &&
      `
        background-color: ${theme.pointColor.clicked};
      `}

    ${({ $variant }) =>
      $variant === 'notClicked' &&
      `
        border-color: none;
        background-color: ${theme.pointColor.clicked}
        color: ${theme.tabMenu.variants.clicked.color};
      `}
  }
`;

export default TabButtonComponent;
