import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  padding: 250px 0;
`;

export const Title = styled.p`
  font-size: ${theme.fontSize.thirdSize};
  font-weight: 700;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;
