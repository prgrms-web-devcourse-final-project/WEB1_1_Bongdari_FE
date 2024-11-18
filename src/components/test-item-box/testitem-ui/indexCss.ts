import styled from 'styled-components';

export const Button = styled.button<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: inline-block;
`;
