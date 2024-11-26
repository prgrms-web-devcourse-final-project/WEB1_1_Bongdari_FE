import styled from 'styled-components';
import theme from '@/styles/theme';

export const PPPG_Component1Css = styled.div`
  width: 725px;
  height: 291px;

  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  font-size: ${theme.fontSize.seventhSize};

  display: grid;
  grid-template-columns: 250px 250px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 10px; // 간격 추가
  padding: 30px; // 여백 추가

  .blueTitle {
    grid-column: 1/3;
    grid-row: 1/2;
    color: ${theme.pointColor.Regular};
    font-size: ${theme.fontSize.sixthSize};
  }

  .info {
    width: 300px;
  }
  .info.wide {
    grid-column: 1/3;
    grid-row: 4/5;
    width: 100%;
    line-height: ${theme.fontSize.secondSize};
  }
  .label {
    display: inline-block;
    color: #282828;
    font-weight: 600;
    margin-right: 10px;
    width: 50px;
  }
  .rightLabel {
    width: 90px;
  }
  .data {
    color: #282828;
    font-weight: 300;
    width: 50%;
  }
`;
