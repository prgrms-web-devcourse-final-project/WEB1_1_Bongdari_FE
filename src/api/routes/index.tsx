// routes.ts
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import Layout from '@/layout/Layout';
import MainPage from '@/pages/main-page/MainPage';
import TestPage from '@/pages/test-page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/main" replace />
      },
      {
        path: '/main',
        element: <MainPage />
      },
      // "/test" 경로는 아래에 둘 수 있도록 해주세요 (이 위로 라우팅 설정 해달라는 뜻입니다)
      {
        path: '/test',
        element: <TestPage />
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  future: {
    v7_skipActionErrorRevalidation: true, // 이미 활성화된 플래그
    v7_relativeSplatPath: true, // 상대 경로 동작 변경
    v7_fetcherPersist: true, // fetchers 유지 동작 변경
    v7_normalizeFormMethod: true, // formMethod 대소문자 정규화
    v7_partialHydration: true // RouterProvider 하이드레이션 동작 변경
  }
});
