// src/mocks/browser.ts
// 클라이언트에서 api요청 모킹을 처리해주는 파일
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers'; // 요청 핸들러들을 불러옴

export const worker = setupWorker(...handlers); // 서버 설정
