// routes.ts
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import Layout from '@/layout/Layout';
import MainPage from '@/pages/main-page/MainPage';

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
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
