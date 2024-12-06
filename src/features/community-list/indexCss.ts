import theme from '@/styles/theme';
import styled from 'styled-components';

export const CommuntiyListCss = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  & * {
    /* border: 1px solid gray; */

    text-decoration-line: none;
  }
  .listHeader {
    width: 100%;
    width: 100%;
    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .listHeader > div {
    display: flex;
    justify-content: center;
    min-width: 22%;
    max-width: 40%;
  }
  .listHeader > div > i {
    width: 100px;
    text-align: center;
    margin: 0 18px;
  }
  .listHeader i {
    font-size: ${theme.fontSize.seventhSize};
    font-weight: 600;
    color: #5a5a5a;
    text-align: center;
    padding-bottom: 20px;
  }
  .listHeader i:first-of-type {
    padding-left: 4%;
  }

  .listWrap {
    width: 100%;
    height: 900px;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & > .btnWrap {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
