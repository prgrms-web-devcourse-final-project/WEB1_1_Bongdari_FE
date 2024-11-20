import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 아래에 추가적으로 적용할 전역 스타일 작성 */
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    src: url('./assets/fonts/Pretendard-Light.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url('./assets/fonts/Pretendard-Light.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url('./assets/fonts/Pretendard-Medium.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: url('./assets/fonts/Pretendard-Bold.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    src: url('./assets/fonts/Pretendard-ExtraBold.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    src: url('./assets/fonts/Pretendard-Black.woff') format('woff'),
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, button, #root {
    font-family: "Pretendard";
    font-weight: 400;
    letter-spacing: -0.02px;
  }
`;
