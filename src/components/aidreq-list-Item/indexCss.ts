import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.li<{ width: string }>`
  width: ${(props) => props.width};
  border: ${theme.box.item.border};
  background-color: white;
  border-radius: ${theme.box.item.borderRadius};
`;
