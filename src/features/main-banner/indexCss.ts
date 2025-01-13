import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 300px;
  background-image: url('/assets/imgs/somemore-banner-v2.jpg');
  background-repeat: no-repeat;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    display: none;
  }
`;
