import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  .innerWrap {
    margin-top: 20%;
    max-width: 460px;
    width: 90%;
    min-height: 100vh;
    margin: 0 auto;
  }

  .tabWrap {
    width: 200px;
    padding: 10px;
  }

  .title {
    display: inline-block;
    font-size: ${Theme.fontSize.secondSize};
    font-weight: 600;
    padding: 40px 0 15px;
  }
`;
