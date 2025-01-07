import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.li<{ width: string }>`
  width: ${(props) => props.width};
  border: ${theme.box.item.border};
  background-color: white;
  border-radius: ${theme.box.item.borderRadius};
  transition: 0.2s;
  transition-property: border, box-shadow;

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1000px) {
    transition-property: border, box-shadow;
    width: 100%;
  }
`;
