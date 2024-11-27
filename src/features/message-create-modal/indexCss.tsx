import styled from 'styled-components';
import theme from '@/styles/theme';

export const MessageCreateModalCss = styled.div`
  .modalInnerWrap {
    padding: 45px;
  }

  .modalInnerWrap > i {
    font-size: ${theme.fontSize.secondSize};
    font-weight: 600;
    padding-bottom: 40px;
    display: inline-block;
  }

  .inputWrap {
    display: flex;
    padding-bottom: 20px;
  }
  .inputWrap > i {
    font-size: ${theme.fontSize.eighthSize};
    font-weight: 600;
    color: #656565;

    width: 60px;
    padding-top: 16px;
  }

  .btnWrap {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
  }
  .btnWrap .checkErr {
    font-size: ${theme.fontSize.eighthSize};
    font-weight: 500;
    color: red;
    opacity: 0.8;
  }
`;
