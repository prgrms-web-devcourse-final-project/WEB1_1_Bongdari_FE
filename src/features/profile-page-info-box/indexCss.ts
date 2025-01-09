import styled from 'styled-components';
import theme from '@/styles/theme';

export const ProfileInfoBoxCss = styled.div`
  max-width: 720px;
  width: 100%;
  /* height: 290px; */

  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  font-size: ${theme.fontSize.seventhSize};

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  grid-auto-rows: 50px;
  grid-gap: 25px; // 간격 추가
  padding: 40px 30px; // 여백 추가

  .blueTitle {
    grid-column: 1/-1;
    color: ${theme.pointColor.Regular};
    font-size: ${theme.fontSize.sixthSize};
    font-weight: 600;
    margin-bottom: 30px;
  }

  .info {
    line-height: ${theme.fontSize.fourthSize};
    display: flex;
    min-height: 40px;
    margin-bottom: 8px;
  }
  .info.wide {
    grid-column: 1 / -1;
  }

  .label {
    display: inline-block;
    color: #282828;
    font-weight: 600;
    margin-right: 10px;
    width: 80px;
  }
  .rightLabel {
    width: 80px;
  }

  .data {
    display: inline-block;
    color: #828282;
    font-weight: 300;
    width: 100%;
  }
  img.data {
    width: ${theme.fontSize.fourthSize};
    height: ${theme.fontSize.fourthSize};
    object-fit: contain;
    transform: rotateZ(30deg);
  }
  .info.wide .data {
    color: #858585;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 0px;

    max-width: none;
    width: 100%;
    /* grid-gap: 15px; // 간격 추가 */
    padding: 30px 25px; // 여백 추가

    .info {
      /* border: 1px solid red; */
      margin-bottom: 0px;
    }
    .label {
      min-width: 50px;
    }
  }
`;
