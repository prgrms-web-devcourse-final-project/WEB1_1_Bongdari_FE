import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 1200px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
