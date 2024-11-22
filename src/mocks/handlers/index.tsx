// 요청을 지연시킬 수 있는 유틸리티 함수 -> api 응답을 시뮬레이션할 때 사용
import { delay } from 'msw';

// 핸들러 불러오기
import { centerProfileHandlers } from './centerProfile-handler.mock';

// 개발 환경에서만 작동하는 지연 함수
export const delayForDevelopment = async (ms = 1000) => {
  if (import.meta.env.NODE_ENV === 'development') {
    await delay(ms);
  }
};

// 배열 안에 mock-data 안에 있는 핸들러 spread 연산자로 불러오기
export const handlers = [...centerProfileHandlers];
