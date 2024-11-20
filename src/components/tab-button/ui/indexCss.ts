import styled from 'styled-components';

const TabButtonComponent = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['border', 'borderRadius', 'fontSize', 'bgColor', 'color', 'width', 'height', 'disabled'].includes(prop)
})<{
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
}>`
  border: ${({ border }) => border || '1px solid #DFDFDF'};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  background-color: ${({ bgColor }) => bgColor || '#2382FF'};
  color: ${({ color }) => color || '#848484'};
  width: ${({ width }) => width || '167px'};
  height: ${({ height }) => height || '47px'};

  font-weight: 600;
  cursor: pointer;
`;

export default TabButtonComponent;
