import styled from 'styled-components';

export const HalfListCss = styled.div`
  .contentWrap {
    height: calc(80px * 5);
    text-align: center;
    padding: auto;
  }
  .noData {
    /* background-color: #fff; */
    border-radius: 13px;
    border: 1px dashed gray;
    height: 100%;
    padding-top: 25%;
  }
  .listWrap {
    display: grid;
    gap: 10px;

    grid-auto-rows: 70px; /* 각 행의 기본 높이 */
  }

  @media (max-width: 1000px) {
  }
`;
