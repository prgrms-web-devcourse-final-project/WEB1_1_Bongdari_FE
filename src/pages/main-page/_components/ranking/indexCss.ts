import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  padding-right: 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-right: 0;
    gap: 24px;
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 600;

  @media (max-width: 1000px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const Bottom = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  background-color: white;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
