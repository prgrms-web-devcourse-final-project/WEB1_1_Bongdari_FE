import theme from '@/styles/theme';
import styled from 'styled-components';

export const CommentCss = styled.div`
  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  padding: 20px 40px;
  margin-top: 16px;

  .mainCommentWrap {
    padding: 15px 0;
  }
  .writerId {
    font-size: ${theme.fontSize.eighthSize};
    font-weight: 700;
    line-height: 150%;
  }
  .content {
    font-size: ${theme.fontSize.seventhSize};
    color: #808080;
    line-height: 150%;
  }

  .commentInnerWrap {
    font-size: ${theme.fontSize.eighthSize};
    font-weight: 300;
    line-height: 150%;
    padding: 10px 0;
  }
  .commentInnerWrap > * {
    padding-right: 15px;
  }
  .commentInnerWrap .editBtn,
  .commentInnerWrap .deleteBtn {
    color: #7d7d7d;
    cursor: pointer;
  }

  .addComment {
    background-color: ${theme.box.section.backgroundColor};
    border: ${theme.box.section.border};
    border-radius: ${theme.box.section.borderRadius};
    padding: 20px 20px 10px;
  }
`;
