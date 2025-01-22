import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: white;
  margin-top: 10px;

  & > div:nth-of-type(1) {
    padding: 50px;
    border-bottom: 1px solid #d1d1d1;

    @media (max-width: 1000px) {
      padding: 30px;
    }
  }
`;

export const Text = styled.p`
  color: #535353;
  line-height: 24px;

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

export const RecruitCount = styled.p`
  color: #292929;
  height: 82px;
  line-height: 82px;
  padding-left: 50px;

  @media (max-width: 1000px) {
    padding-left: 30px;
  }
`;
