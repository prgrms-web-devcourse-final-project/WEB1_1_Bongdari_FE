import styled from 'styled-components';

const ButtonComponent = styled.button<{
  border: string;
  borderRadius: string;
  fontSize: string;
  bgColor: string;
  color: string;
  width: string;
  height?: string;
  fontWeight?: string;
  disabled?: boolean;
}>`
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ borderRadius }) => borderRadius || '12px'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  background-color: ${({ bgColor }) => bgColor || '#2382FF'};
  color: ${({ color }) => color || '#FFFFFF'};
  width: ${({ width }) => width || '167px'};
  height: ${({ height }) => height || '47px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'medium'};
  cursor: pointer;

  // 비활성화 상태
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  // TODO: hover 했을 때, 클릭 됐을 때 경우 나눠서 수정해야 함
  /* &:hover {
    background-color: ${({ bgColor }) =>
    bgColor === 'default' ? '#62A6FF' : bgColor === 'emphasize' ? '#2382FF' : ''};
  } */
`;

export default ButtonComponent;
