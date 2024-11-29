import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .innerWrap {
    max-width: 1200px;
    margin-top: 250px;
    width: 90%;
  }

  .sayHi {
    font-size: ${theme.fontSize.secondSize};
    font-weight: 600;
    margin-bottom: 20px;
    display: inline-block;
  }

  .halfListWrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;
