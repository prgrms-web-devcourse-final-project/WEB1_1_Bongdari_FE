import theme from '@/styles/theme';
import styled from 'styled-components';

export const CommentCss = styled.div`
  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  padding: 20px 40px;
  margin-top: 16px;
  & * {
    /* border: 1px solid red; */
  }

  @media (max-width: 1000px) {
    padding: 18px 30px;
  }

  .mainCommentWrap {
    padding: 15px 0 10px;
  }
  /* .replyCommentWrap {
    display: flex;
    flex-direction: column-reverse;
  } */

  .replyInput {
    background-color: #f9f9f9;
  }
  .replyInput .content {
    background-color: #f9f9f9;
    padding: 12px 0 0 12px;
  }

  .writerId {
    font-size: ${theme.fontSize.eighthSize};
    font-weight: 700;
    line-height: 150%;
  }
  .content {
    background-color: white;
    font-size: ${theme.fontSize.seventhSize};
    color: #808080;
    line-height: 150%;

    width: 100%;
    min-height: ${theme.fontSize.seventhSize};
    text-overflow: wrap;
    overflow: hidden;
    resize: none;
    border: none;
  }

  .commentInnerWrap {
    font-size: ${theme.fontSize.eighthSize};
    font-weight: 300;
    line-height: 150%;
    /* padding: 10px 0; */
  }
  .commentInnerWrap .createdDate {
    display: inline-block;
    margin-right: 25px;
  }
  .commentInnerWrap .editBtn,
  .commentInnerWrap .deleteBtn,
  .commentInnerWrap .replyBtn {
    color: #7d7d7d;
    cursor: pointer;
    margin-right: 10px;
  }

  .addComment {
    background-color: ${theme.box.section.backgroundColor};
    border: ${theme.box.section.border};
    border-radius: ${theme.box.section.borderRadius};
    padding: 20px 20px 10px;
  }
`;
