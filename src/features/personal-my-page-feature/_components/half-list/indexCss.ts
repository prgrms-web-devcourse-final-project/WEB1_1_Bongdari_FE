import styled from 'styled-components';

export const HalfListCss = styled.div`
  .listWrap {
    display: grid;
    /* grid-template-rows: repeat(5, 70px); */
    gap: 8px;

    /* height: calc(80px * 5); */
    grid-auto-rows: 70px; /* 각 행의 기본 높이 */
  }
`;
