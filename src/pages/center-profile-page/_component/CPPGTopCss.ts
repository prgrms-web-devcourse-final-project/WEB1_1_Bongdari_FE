import styled from 'styled-components';

export const CPPGTopCss = styled.div`
  height: 100%;
  display: flex;
  gap: 15px;
  margin-bottom: 60px;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }

  .rightWrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .noData {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 1000px) {
    display: block;
    width: 100%;

    .rightWrap {
      width: 100%;
      margin-top: 10px;
    }
  }
`;
