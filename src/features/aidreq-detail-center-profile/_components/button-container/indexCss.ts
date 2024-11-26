import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MailButton = styled.button`
  width: 220px;
  height: 47px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  background-color: white;
  font-size: 14px;
  font-weight: 400;
  color: #a4a4a4;
  transition: 0.2s;

  &:hover {
    background-color: #dcdcdc;
    cursor: pointer;
  }
`;
