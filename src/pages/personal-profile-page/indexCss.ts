import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${theme.defaultPageCss.defaultPageCss}

  display: flex;
  gap: 15px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  & > * {
    margin: 0 auto auto;
  }

  @media (max-width: 1024px) {
    .innerWrap {
      grid-template-columns: 100%;
      grid-template-rows: 1fr 1fr;
    }
  }
`;
