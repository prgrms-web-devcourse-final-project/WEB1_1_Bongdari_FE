import theme from '@/styles/theme';
import styled from 'styled-components';

export const SectionBox = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  max-width: 1200px;
  width: 90%;
  padding: 58px 100px 84px 80px;
  margin: auto;
`;

export const ResisterTitle = styled.p`
  font-size: ${theme.fontSize.sixthSize};
  font-weight: 600;
`;

export const RegisterTitleSection = styled.h1`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 0 35px 0;
`;

export const TooltipBorder = styled.div`
  border: 1px solid ${theme.pointColor.Regular};
  width: 21px;
  height: 21px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: flex-start;
  padding-bottom: 40px;
`;
