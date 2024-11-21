// 사용 예시일 뿐, 스타일 가이드 나오면 수정할 예정입니다.

/** 자주 사용하는 색상들 */
const colors = {
  // 예시: slate50: "#f8fafc",

  /* 아래 부분을 비워둔 이유는 타입때문 ( "<ThemeProvider>"에서 조건에 따라 다르게 값을 채움 ) */
  color: '',
  backgroundColor: '',
  gray: ''
};

/** 검정 배경 */
export const darkTheme = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  gray: '#343434'
};
/** 흰색 배경 */
export const lightTheme = {
  color: '#FFFFFF',
  backgroundColor: '#000000',
  gray: '#D9D9D9'
};

/** 손모아 스타일가이드 시작 */
/** 손모아 스타일가이드 시작 */

export const pointColor = {
  Regular: '#62A6FF',
  event: '#2382FF',
  clicked: '#0A66DE'
};

export const box = {
  section: {
    border: '1px solid #e3e3e3',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px'
  },
  item: {
    border: '1px solid #e6e6e6',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px'
  }
};

export const label = {
  // 도움요청글 유형 / 시간인증
  aidRequestLabel: {
    fontSize: '14px',
    border: '1px solid #E1E1E1'
  },
  // 쪽지상태
  messageLabel: {
    fontSize: '12px',
    backgroundColor: '#62A6FF'
  },
  participantStateLabel: {
    // 도움요청글 모집상태
    fontSize: '14px',
    variants: {
      blue: {
        backgroundColor: '#2382FF'
      },
      purple: {
        backgroundColor: '#8623FF'
      },
      orange: {
        backgroundColor: '#FF6523'
      }
    }
  }
};

export const submitButton = {
  borderRadius: '12px',
  variants: {
    // 클릭불가
    disabled: {
      backgroundColor: '#E2E2E2',
      color: '#ADADAD'
    },
    // 파란놈
    enabledOne: {
      backgroundColor: '#2382FF',
      color: '#FFFFFF'
    },
    // 파란테두리
    enabledTwo: {
      backgroundColor: '#FFFFFF',
      color: '#2382FF',
      border: '1px solid #2382FF'
    }
  }
};

export const tabMenu = {
  variants: {
    // 클릭 된 메뉴
    clicked: {
      backgroundColor: '#2382FF',
      color: '#FFFFFF'
    },
    // 클릭 안된 메뉴
    notClicked: {
      backgroundColor: '#FFFFFF',
      color: '#848484',
      border: '1px solid #DFDFDF'
    }
  }
};

export const inputWhite = {
  backgroundColor: '#FFFFFF',
  color: '#000000',
  placeholderColor: '#CFCFCF',
  borderRadius: '12px',
  variants: {
    // 포커스 된 인풋
    focused: {
      border: '1px solid #62A6FF'
    },
    // 포커스 안된 인풋
    notFocused: {
      border: '1px solid #DBDBDB'
    }
  }
};

export const inputGray = {
  color: '#363636',
  placeholderColor: '#C8C8C8',
  borderRadius: '8px',
  variants: {
    // 포커스 된 인풋
    focused: {
      backgroundColor: '#DEDEDE'
    },
    // 포커스 안된 인풋
    notFocused: {
      backgroundColor: '#F5F5F5'
    }
  }
};

export const modal = {
  borderRadius: '25px',
  variants: {
    // 큰모달
    big: {
      width: '800px',
      height: '500px'
    },
    // 작은모달
    small: {
      width: '1300px',
      height: '600px'
    }
  }
};

export const fontSize = {
  firstSize: '36px',
  secondSize: '32px',
  thirdSize: '26px',
  fourthSize: '24px',
  fifthSize: '20px',
  sixthSize: '18px',
  seventhSize: '16px',
  eighthSize: '14px',
  ninthSize: '12px'
};

/** 손모아 스타일가이드 끝 */
/** 손모아 스타일가이드 끝 */

/** 반응형 사이즈 */
const mediaSize = {
  xs: "screen and (max-width: '400px')",
  sm: "screen and (max-width: '640px')",
  md: "screen and (max-width: '768px')",
  lg: "screen and (max-width: '1024px')",
  xl: "screen and (max-width: '1280px')",
  '2xl': "screen and (max-width: '1536px')"
};

// /** 폰트 크기 */
// const fontSize = {
//   xs: '0.75rem',
//   sm: '0.875rem',
//   md: '1rem',
//   lg: '1.125rem',
//   xl: '1.25rem',
//   '2xl': '1.5rem'
// };

/** 그 외의 크기 */
const size = {
  xs: '0.2em',
  sm: '0.4em',
  md: '0.6em',
  lg: '1em',
  xl: '1.4em',
  '2xl': '1.6em'
};

const theme = {
  pointColor,
  colors,
  mediaSize,
  size,
  box,
  label,
  submitButton,
  tabMenu,
  inputWhite,
  inputGray,
  modal,
  fontSize
};

export default theme;

/** 타입 재정의를 위함 ( "styled-components" 변수 타입 추론을 위함( 자동완성 ) ) */
export type Theme = typeof theme;
