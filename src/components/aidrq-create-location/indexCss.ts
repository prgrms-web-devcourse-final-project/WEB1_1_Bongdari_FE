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
    color: #62a6ff;
    background-color: white;
  }
`;

export const LocationInfo = styled.input`
  flex: 1;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  background-color: white;
  font-size: 16px;

  &::placeholder {
    color: #cfcfcf;
  }
`;
