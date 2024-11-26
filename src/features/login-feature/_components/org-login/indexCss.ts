import Theme from '@/styles/theme';
import styled from 'styled-components';

export const OrgLoginCss = styled.div`
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .inputWrap {
    width: 100%;
  }

  .inputWrap .label {
    display: inline-block;
    padding: 10px;

    font-size: ${Theme.fontSize.ninthSize};
    font-weight: 500;
    color: #6f6f6f;
  }

  .btnWrap {
    width: 100%;

    margin: 50px 0 30px;
    display: flex;
    justify-content: space-between;
  }
  .firstVisitBtn {
    background-color: transparent;
    padding: 10px 15px;
    border-radius: 30px;
    border: 1.5px solid #e0e0e0;

    font-size: ${Theme.fontSize.seventhSize};
    font-weight: 500;
    color: #717171;

    cursor: pointer;
  }
`;
