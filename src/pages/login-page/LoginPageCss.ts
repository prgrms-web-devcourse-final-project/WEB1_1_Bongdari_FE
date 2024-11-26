import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 460px;
  width: 30%;
  min-width: 100vh;
  margin: 0 auto;
  border: 1px solid red;

  .title {
    display: inline-block;
    font-size: ${Theme.fontSize.secondSize};
    font-weight: 600;
    padding: 40px 0 15px;
  }
`;
