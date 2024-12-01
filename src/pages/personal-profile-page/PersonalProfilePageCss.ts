import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .innerWrap {
    display: flex;
    gap: 15px;

    margin-bottom: 20px;

    max-width: 1200px;
    margin-top: 250px;
    width: 90%;
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
