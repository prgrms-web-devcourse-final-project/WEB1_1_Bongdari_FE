import theme from '@/styles/theme';
import styled from 'styled-components';

export const TextContentContainer = styled.div`
  width: 100%;
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  padding: 60px 0 0 0;
  min-height: 515px;

  @media (max-width: 1000px) {
    padding: 25px 0 0 0;
  }
`;

export const Content = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  color: #535353;
  min-height: 437px;
  border-bottom: 1px solid #d1d1d1;
  padding: 0 64px;

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.8em;
  }

  h3 {
    font-size: 1.17em;
    font-weight: bold;
    margin-bottom: 0.6em;
  }

  ul,
  ol {
    margin: 1em 0;
    padding-left: 2em;
  }

  li {
    list-style: disc;
    margin: 0.5em 0;
  }

  strong {
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    padding: 0 25px;
  }
`;

export const ExpectedRecruit = styled.p`
  font-size: ${theme.fontSize.sixthSize};
  color: #292929;
  padding: 32px 64px;
  font-weight: 500;

  @media (max-width: 1000px) {
    padding: 25px;
  }
`;
