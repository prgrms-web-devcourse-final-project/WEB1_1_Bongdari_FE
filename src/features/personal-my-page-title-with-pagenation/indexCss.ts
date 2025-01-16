import Theme from '@/styles/theme';
import styled from 'styled-components';

export const TitleWithPagenationCss = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    padding: 50px 10px 20px 10px;
  }

  .title {
    font-size: ${Theme.fontSize.fourthSize};
    font-weight: 600;
  }
  .pagenationWrap {
    font-size: ${Theme.fontSize.seventhSize};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .pages.disabled {
    color: rgb(175, 175, 175);
  }
  .svgIcon {
    cursor: pointer;
  }
`;
