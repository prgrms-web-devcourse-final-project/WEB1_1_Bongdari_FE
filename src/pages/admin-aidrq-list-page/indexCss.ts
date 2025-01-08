import theme from '@/styles/theme';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 250px 0;
  gap: 56px;
  align-items: center;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const Title = styled.p`
  font-size: ${theme.fontSize.secondSize};
  font-weight: 700;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: ${theme.fontSize.fifthSize};
    width: 100%;
  }
`;
