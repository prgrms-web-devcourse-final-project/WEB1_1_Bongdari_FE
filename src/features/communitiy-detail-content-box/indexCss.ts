import theme from '@/styles/theme';
import styled from 'styled-components';

export const CommunityDetailContentBoxCss = styled.div`
  .title {
    font-size: ${theme.fontSize.firstSize};
    font-weight: 700;
    display: blocK;
    padding-bottom: 50px;
  }

  .modifiedDate {
    font-size: ${theme.fontSize.eighthSize};
    color: #696969;
    display: block;
    padding-bottom: 30px;
  }

  .content {
    background-color: ${theme.box.section.backgroundColor};
    border: ${theme.box.section.border};
    border-radius: ${theme.box.section.borderRadius};
    padding: 50px 120px;
    margin: 10px 0;

    font-size: ${theme.fontSize.seventhSize};
    line-height: ${theme.fontSize.thirdSize};
  }
  .btnWrap {
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }
`;
