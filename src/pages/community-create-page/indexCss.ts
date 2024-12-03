import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 250px 0;

  .title {
    font-size: ${theme.fontSize.secondSize};
    font-weight: 700;
    padding-bottom: 20px;
    display: block;
  }
`;
