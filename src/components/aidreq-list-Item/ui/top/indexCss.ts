import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  border-bottom: 1px solid #d1d1d1;
  padding: 2rem 2rem 1.5rem 2rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Title = styled.p`
  font-size: ${theme.fontSize.thirdSize};
  font-weight: 700;
  margin: 1rem 0;
  height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Text = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 400;
  color: #535353;
  height: 28px;
  overflow: hidden;

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
`;

export const Center = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 300;
  color: #808080;
  margin-top: 1rem;
`;
