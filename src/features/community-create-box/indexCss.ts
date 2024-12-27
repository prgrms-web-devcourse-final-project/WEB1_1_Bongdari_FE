import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const ApplyButton = styled(Button)`
  width: 220px;
  height: 50px;
  font-size: ${theme.fontSize.eighthSize};
  border-radius: 13px;
`;

export const CommunityCreateBoxCss = styled.div`
  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  padding: 70px;

  .inputWrap {
    display: grid;
    grid-template-columns: 60px auto;
    margin-bottom: 10px;
  }
  .inputWrap > .label {
    font-size: ${theme.fontSize.eighthSize};
    font-weight: 600;
    color: #656565;
    padding-top: 10px;
    line-height: 30px;
  }

  .btnWrap {
    width: 100%;
    text-align: center;
    margin-top: 70px;
  }
`;
