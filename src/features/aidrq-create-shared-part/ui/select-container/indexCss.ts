import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 16px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const SelectBox = styled.div`
  width: 100%;

  & > p {
    font-size: 12px;
    color: #373737;
    padding-bottom: 10px;
  }
`;
