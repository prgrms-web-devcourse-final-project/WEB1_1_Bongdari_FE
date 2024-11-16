import { Navigate } from 'react-router-dom';

import { client } from './client';
import Header from '@/layout/header/Header';
import MainPage from '@/pages/main-page/MainPage';

// 라우팅 구성
export const router = [
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: client.main,
        element: <MainPage />
      },
      {
        path: '/',
        element: <Navigate to={client.main} replace />
      }
    ]
  }
];
