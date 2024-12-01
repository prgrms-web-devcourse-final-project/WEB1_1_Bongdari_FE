import theme from '@/styles/theme';
import styled from 'styled-components';

export const TextContentContainer = styled.div`
  width: 100%;
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  padding: 60px 0 0 0;
  min-height: 515px;
`;

export const Content = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  color: #535353;
  min-height: 437px;
  border-bottom: 1px solid #d1d1d1;
  padding: 0 64px;
`;

export const ExpectedRecruit = styled.p`
  font-size: ${theme.fontSize.sixthSize};
  color: #292929;
  padding: 32px 64px;
  font-weight: 500;
`;
