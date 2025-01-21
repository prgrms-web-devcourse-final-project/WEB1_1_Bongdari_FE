import theme from '@/styles/theme';
import styled from 'styled-components';

export const SectionBox = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  width: 100%;
  padding: 58px 100px 84px 80px;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 34px 20px 44px 20px;
  }
`;

export const ResisterTitle = styled.p`
  font-size: ${theme.fontSize.sixthSize};
  font-weight: 600;
  cursor: default;
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

  .noData {
    height: 100px;
    width: 100%;
    border: 1px dashed gray;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .noDataText {
    height: 200px;
    width: 100%;
    border: 1px dashed gray;
    border-radius: 13px;
    display: block;
  }

  @media (max-width: 1000px) {
    gap: 11px;
  }
`;
