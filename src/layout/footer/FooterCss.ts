import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 75px;
  background-color: #0047a4;
`;

export const Contents = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    font-size: 20px;
    font-weight: 600;
    color: white;
  }

  & > p {
    font-size: 14px;
    color: white;

    & > span {
      font-size: 12px;
      display: inline-block;
      border: 1px solid white;
      border-radius: 20px;
      padding: 10px;
      color: white;
      margin-left: 20px;
    }
  }
`;
