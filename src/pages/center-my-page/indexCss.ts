import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 150px 0 200px 0;
  gap: 26px;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
