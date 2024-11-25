import Theme from '@/styles/theme';
import styled from 'styled-components';

export const SectionTitleCss = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & * {
    padding: 50px 10px 20px 10px;
  }

  & > i:first-of-type {
    font-size: ${Theme.fontSize.fourthSize};
    font-weight: 600;
  }
  .pagenationWrap {
    font-size: ${Theme.fontSize.seventhSize};
  }
  .pageBtn {
    cursor: pointer;
  }
  .disabled {
    color: #e1e1e1;
    cursor: default;
  }
`;
