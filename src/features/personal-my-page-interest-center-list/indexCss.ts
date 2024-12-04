// import Theme from '@/styles/theme';
import styled from 'styled-components';

interface interestCenterListCssProps {
  children?: React.ReactNode;
  currpage: number;
}
export const InterestCenterListCss = styled.div<interestCenterListCssProps>`
  .listShowWrap {
    overflow-y: hidden;
    overflow-x: hidden;
    white-space: nowrap;
  }
  .listInnerWrap {
    display: flex;
    gap: 5px;
    transition: transform 0.3s ease;
    transform: translateX(${(props) => -(props.currpage - 1) * 100}%);
  }

  .noData {
    width: 100%;
    text-align: center;
  }
`;
