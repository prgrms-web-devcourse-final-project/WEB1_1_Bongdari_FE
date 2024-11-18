import styled from 'styled-components';

const ButtonCss = styled.button<{
  bgColor: 'default' | 'emphasize';
  disabled: boolean;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '40px'};
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  // 기본 스타일
  background-color: ${({ bgColor }) => (bgColor === 'default' ? '#62A6FF' : '#2382FF')};
  color: white;

  // 비활성화 상태
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  // 버튼 hover 효과
  &:hover {
    background-color: ${({ bgColor }) =>
      bgColor === 'default' ? '#62A6FF' : bgColor === 'emphasize' ? '#2382FF' : ''};
  }
`;

export default ButtonCss;
