import styled from 'styled-components';
import theme from '@/styles/theme';
import Button from '@/components/button';
import TextArea from '@/components/textArea';

export const ApplyButton = styled(Button)`
  width: 220px;
  height: 50px;
  border-radius: 13px;
  font-weight: 600;
  font-size: ${theme.fontSize.eighthSize};

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ApplyTextArea = styled(TextArea)`
  height: 220px;

  @media (max-width: 1000px) {
    height: 200px;
  }
`;

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

  @media (max-width: 1000px) {
    .btnWrap {
      display: block;
    }
    .btnWrap .checkErr {
      width: 100%;
      display: block;
      text-align: right;
      padding-bottom: 10px;
    }
  }
`;
