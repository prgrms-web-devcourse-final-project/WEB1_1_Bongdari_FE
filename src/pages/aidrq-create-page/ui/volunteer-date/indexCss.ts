import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 52%;

  @media (max-width: 1000px) {
    width: 100%;
  }

  & > p {
    font-size: 12px;
    color: #373737;
    padding-bottom: 10px;
  }
`;
