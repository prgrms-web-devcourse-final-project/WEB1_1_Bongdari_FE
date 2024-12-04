import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 250px 0;

  .innerWrap {
    max-width: 460px;
    width: 90%;
    margin: 0 auto;
  }

  .tabWrap {
    width: 200px;
  }

  .title {
    display: inline-block;
    font-size: ${Theme.fontSize.secondSize};
    font-weight: 600;
    padding: 40px 0 15px;
  }
`;
