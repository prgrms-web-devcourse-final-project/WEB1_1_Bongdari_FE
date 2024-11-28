import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 5px;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    border-radius: 8px;
    border: 1px solid #62a6ff;
    font-size: 30px;
    color: #62a6ff;
    background-color: white;
    transition: 0.2s;

    &:hover {
      background-color: #dfedff;
      cursor: pointer;
    }
  }
`;

export const PopulationInfo = styled.div`
  flex: 1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  background-color: white;
  font-size: 24px;
  font-weight: 600;
`;
