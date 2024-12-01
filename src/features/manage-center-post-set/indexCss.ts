import theme from '@/styles/theme';
import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 23px;
`;

export const SectionBox = styled.div`
  width: 100%;
  max-height: 810px;
  height: 90vw;
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  padding: 55px 42px 44px 48px;
`;
