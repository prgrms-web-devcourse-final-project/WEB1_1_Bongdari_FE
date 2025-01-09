import theme from '@/styles/theme';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  ${theme.defaultPageCss.topPadding}
  ${theme.defaultPageCss.widthAndMargin}
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
