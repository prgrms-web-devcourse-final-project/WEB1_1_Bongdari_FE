import styled from 'styled-components';
import theme from '@/styles/theme';

export const CPPGReviewListCss = styled.div`
  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  padding: 60px 90px;

  .noData {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 1000px) {
    padding: 50px 40px;
  }
`;
