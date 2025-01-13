import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 10px;
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 70px 0;
  gap: 42px;

  @media (max-width: 1000px) {
    padding: 20px 0 32px 0;
  }
`;

export const ContentTitle = styled.p`
  font-size: ${theme.fontSize.firstSize};
  font-weight: 700;

  @media (max-width: 1000px) {
    font-size: ${theme.fontSize.fourthSize};
  }
`;

export const CurrentEdit = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: #696969;
  padding-bottom: 24px;
`;
