import theme from '@/styles/theme';
import styled from 'styled-components';

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoSubTitle = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: #8d8d8d;
  display: flex;
  align-items: end;
`;

export const DueDate = styled.span`
  font-size: 40px;
  font-weight: 600;
  color: #ff7023;
`;
