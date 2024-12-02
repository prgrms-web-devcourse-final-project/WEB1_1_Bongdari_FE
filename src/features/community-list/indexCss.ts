import theme from '@/styles/theme';
import styled from 'styled-components';

export const CommuntiyListCss = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .listHeader {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr 1fr;
    padding: 0 12px;
  }
  .listHeader i {
    font-size: ${theme.fontSize.seventhSize};
    font-weight: 600;
    color: #5a5a5a;
    text-align: center;
    padding-bottom: 20px;
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
