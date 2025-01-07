import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: ${theme.box.section.border};
  background-color: ${theme.box.section.backgroundColor};
  border-radius: ${theme.box.section.borderRadius};
  padding: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 50px;
    padding: 30px;
  }
`;
