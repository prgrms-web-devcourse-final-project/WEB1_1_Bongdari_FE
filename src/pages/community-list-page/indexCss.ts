import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${theme.defaultPageCss.defaultPageCss}

  .innerWrap {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
    width: 100%;
  }
  .title {
    font-size: ${theme.fontSize.secondSize};
    font-weight: 700;
  }
`;
