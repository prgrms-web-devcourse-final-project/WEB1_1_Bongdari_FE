import styled from 'styled-components';
// import theme from '@/styles/theme';

export const PMPGHalfListsCss = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  .noData {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 1000px) {
    & {
      display: block;
    }
  }
`;
