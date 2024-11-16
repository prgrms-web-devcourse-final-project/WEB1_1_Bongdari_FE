import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 아래에 추가적으로 적용할 전역 스타일 작성 */
`;
