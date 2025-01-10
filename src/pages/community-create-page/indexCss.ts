import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${theme.defaultPageCss.defaultPageCss}

  .title {
    font-size: ${theme.fontSize.secondSize};
    font-weight: 700;
    padding-bottom: 20px;
    display: block;

    @media (max-width: 1000px) {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;
