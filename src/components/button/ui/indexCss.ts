import styled from 'styled-components';

const ButtonComponent = styled.button<{
  border: string;
  borderRadius: string;
  fontSize: string;
  bgColor: string;
  color: string;
  width: string;
  height?: string;
  disabled?: boolean;
}>`
  border: ${({ border }) => border || '1px solid #DCDCDC'};
  border-radius: ${({ borderRadius }) => borderRadius || '12px'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  background-color: ${({ bgColor }) => bgColor || '#2382FF'};
  color: ${({ color }) => color || '#A4A4A4'};
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '40px'};

  font-weight: 600;
  cursor: pointer;

  // 비활성화 상태 - TODO: 시안 나오면 맞게 수정할 예정
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  // TODO: 시안 나오면 맞게 수정할 예정
  &:hover {
    background-color: ${({ bgColor }) =>
      bgColor === 'default' ? '#62A6FF' : bgColor === 'emphasize' ? '#2382FF' : ''};
  }
`;

export default ButtonComponent;
