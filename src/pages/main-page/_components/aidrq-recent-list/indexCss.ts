import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 0;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;

  & > button {
    font-size: 14px;
    padding: 6px 1rem;
    border: 1px solid #c7c7c7;
    border-radius: 20px;
    outline: none;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 600;

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

export const Bottom = styled.div`
  display: flex;
`;
