import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 10px;

  & > p:nth-of-type(1) {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }

  & > p:nth-of-type(2) {
    font-size: 16px;
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 20px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
    }

    & > button {
      border: 1px solid #62a6ff;
      color: #62a6ff;
      padding: 5px 10px;
      border-radius: 20px;
      background-color: white;
      outline: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
