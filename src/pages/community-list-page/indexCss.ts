import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 250px 0;

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
