import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 250px 0;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 40px;
`;

export const ThirdLine = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 16px;
`;

export const FourthLine = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  & > button {
    width: 220px;
    height: 53px;
    border-radius: 12px;
    background-color: #2382ff;
    color: white;
    font-weight: 600;
    border: none;
    outline: none;
    transition: 0.2s;

    &:hover {
      background-color: #0a66de;
      cursor: pointer;
    }
  }
`;
