import theme from '@/styles/theme';
import styled from 'styled-components';

export const GoodsItemBox = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 16px 15px 22px;
  gap: 23px;
`;

export const GoodsTitle = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 600;
  cursor: default;
`;

export const Xmark = styled.i`
  color: #939393;
  cursor: pointer;
  font-weight: 300;
  font-size: ${theme.fontSize.eighthSize};
`;
