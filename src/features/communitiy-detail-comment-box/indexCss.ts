import theme from '@/styles/theme';
import styled from 'styled-components';

export const CommunityDetailCommentBoxCss = styled.div`
  margin: 100px 0;

  .title {
    font-size: ${theme.fontSize.fourthSize};
    font-weight: 700;
    padding: 20px 0;
    display: block;
  }
  .commentWrap {
    display: flex;
    flex-direction: column-reverse;
  }
`;
