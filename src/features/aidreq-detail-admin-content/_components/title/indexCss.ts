import theme from '@/styles/theme';
import styled from 'styled-components';

export const LabelContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 70px 0;
  gap: 42px;
`;

export const ContentTitle = styled.p`
  font-size: ${theme.fontSize.firstSize};
  font-weight: 700;
`;

export const CurrentEdit = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: #696969;
`;
