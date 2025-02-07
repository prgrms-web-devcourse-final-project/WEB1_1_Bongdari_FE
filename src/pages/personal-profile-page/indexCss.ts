import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${theme.defaultPageCss.defaultPageCss}

  .noData {
    height: 500px;
    width: 100%;
    border: 1px dashed gray;
    border-radius: 13px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
      height: 300px;
    }
  }

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
