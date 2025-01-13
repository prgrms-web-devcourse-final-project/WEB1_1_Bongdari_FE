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

  @media (max-width: 1000px) {
    .chunkList {
      display: grid;
      /* grid-template-columns: repeat(3, 32%); */
      grid-template-columns: repeat(2, 48%);
      grid-template-rows: repeat(3, 1fr);
      gap: 5px;

      flex: 0 0 calc(100% - 3px);
    }
  }

  .noData {
    height: 200px;
    width: 100%;
    border: 1px dashed gray;
    border-radius: 13px;
    text-align: center;
    display: block;
    padding-top: 8%;
  }
`;
