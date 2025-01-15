import Theme from '@/styles/theme';
import styled from 'styled-components';

const ReviewBoxCss = styled.div`
  background-color: ${Theme.box.section.backgroundColor};
  border-radius: ${Theme.box.section.borderRadius};
  border: ${Theme.box.section.border};
  width: 100%;
  padding: 10px;
  cursor: pointer;

  /* & * {
    border: 1px solid gray;
  } */

  .infoWrap {
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }
  .infoWrap i:first-of-type {
    font-size: ${Theme.fontSize.fifthSize};
    font-weight: 600;
  }
  .infoWrap i:last-of-type {
    font-size: ${Theme.fontSize.eighthSize};
    color: #8d8d8d;
    padding-top: 5px;
  }

  p {
    font-size: ${Theme.fontSize.seventhSize};
    color: #676767;
    line-height: ${Theme.fontSize.sixthSize};
    padding: 0 15% 25px 25px;
  }

  /* display: flex;
  align-items: center;
  justify-content: space-between; */
`;
export default ReviewBoxCss;
