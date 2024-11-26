import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 250px 0;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  gap: 10px;

  & > button:nth-of-type(1) {
    width: 220px;
    height: 53px;
    border: 1px solid #2382ff;
    border-radius: 13px;
    background-color: white;
    color: #2382ff;
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: #e2efff;
    }
  }

  & > button:nth-of-type(2) {
    width: 220px;
    height: 53px;
    background-color: #2382ff;
    border: none;
    border-radius: 13px;
    outline: none;
    color: white;
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: #0a66de;
    }
  }
`;
