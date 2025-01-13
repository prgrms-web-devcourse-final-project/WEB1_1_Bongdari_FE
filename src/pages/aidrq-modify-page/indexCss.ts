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

  @media (max-width: 1000px) {
    font-size: 20px;
    text-align: center;
  }
`;
