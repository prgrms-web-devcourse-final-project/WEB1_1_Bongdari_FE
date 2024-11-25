import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    src: url('/assets/fonts/PretendardVariable.woff2') format('woff2');
    font-weight: 45 920;  // Variable 폰트의 weight 범위 설정
    font-style: normal;
    font-display: swap;   // 폰트 로딩 최적화
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, button, #root {
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    font-weight: 400;
    letter-spacing: -0.02em;
  }
`;
