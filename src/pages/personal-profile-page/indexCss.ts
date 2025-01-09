import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  padding: 250px 0;
  width: 90%;
  max-width: 1200px;

  display: flex;
  gap: 15px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  & > * {
    margin: 0 auto auto;
  }

  @media (max-width: 1024px) {
    .innerWrap {
      grid-template-columns: 100%;
      grid-template-rows: 1fr 1fr;
    }
  }
`;
