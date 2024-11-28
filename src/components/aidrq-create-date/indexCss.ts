import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  position: relative;

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

export const DateInfo = styled.input`
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

export const DatePickerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  .react-datepicker__day--selected {
    background-color: #0066ff;
  }
  .react-datepicker__time-container {
    width: 100px;
  }
`;
