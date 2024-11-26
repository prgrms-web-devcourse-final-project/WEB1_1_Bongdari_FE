import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .innerWrap {
    display: grid;
    grid-template-columns: 460px 720px;
    grid-template-columns: 1fr 2fr;
    gap: 20px;

    max-width: 1200px;
    margin-top: 10%;
    width: 90%;
  }

  .innerWrap > * {
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .innerWrap {
      grid-template-columns: 100%;
      grid-template-rows: 1fr 1fr;
    }
  }
`;
