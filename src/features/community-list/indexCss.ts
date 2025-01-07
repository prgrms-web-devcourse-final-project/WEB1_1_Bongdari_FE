import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const ApplyButton = styled(Button)`
  width: 220px;
  height: 50px;
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 600;
  border-radius: 13px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

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

    @media (max-width: 1000px) {
      position: relative;
      width: 100%;
      margin-top: 80px;
    }
  }

  @media (max-width: 1000px) {
    .listHeader {
      display: none;
    }
  }
`;
