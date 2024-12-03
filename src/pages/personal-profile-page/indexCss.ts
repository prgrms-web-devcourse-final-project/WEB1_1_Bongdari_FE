import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 250px 0;

  .innerWrap {
    display: flex;
    gap: 15px;
    width: 90%;
    max-width: 1200px;
  }

  .innerWrap > * {
    margin: 0 auto auto;
  }

  @media (max-width: 1024px) {
    .innerWrap {
      grid-template-columns: 100%;
      grid-template-rows: 1fr 1fr;
    }
  }
`;
