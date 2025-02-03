// routes.ts
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import Layout from '@/layout/Layout';
import MainPage from '@/pages/main-page/MainPage';
import LoginPage from '@/pages/login-page/LoginPage';
import AidRqListPage from '@/pages/aidrq-list-page';
import AidRqDetailPage from '@/pages/aidrq-detail-page';
import CenterMyPage from '@/pages/center-my-page';
import PersonalProfilePage from '@/pages/personal-profile-page';
import CenterProfilePage from '@/pages/center-profile-page';
import PersonalMyPage from '@/pages/personal-my-page';
import AdminAidRqListPage from '@/pages/admin-aidrq-list-page';
import AidRqDetailAdminPage from '@/pages/aidrq-detail-admin-page';
import AidRqApplicantListPage from '@/pages/aidrq-applicant-list-page';
import AidRqCreatePage from '@/pages/aidrq-create-page';
import AidRqModifyPage from '@/pages/aidrq-modify-page';
import CommunityDetailPage from '@/pages/community-detail-page';
import CommunityListPage from '@/pages/community-list-page';
import CommunityCreatePage from '@/pages/community-create-page';
import FindNearByActivityPage from '@/pages/find-nearby-activitiy-page';
import LandingPage from '@/pages/landing-page';
import { useLoginStore } from '@/store/stores/login/loginStore';
import CenterContactPage from '@/pages/center-contact-page';
import LoginErrorPage from '@/pages/error-page/login-error-page';
import NotFoundPage from '@/pages/error-page/not-found-page';
import SignupPage from '@/pages/signup-page';

import CenterDetailInfoPage from '@/pages/detail-info-page/center';
import VolunteerDetailInfoPage from '@/pages/detail-info-page/volunteer';
import SuccessPage from '@/pages/success-page';
import ProtectedRoute from '@/components/route/ProtectedRoute';

const MyPage = () => {
  const loginType = useLoginStore((state) => state.loginType);

  // loginType에 따라 다른 컴포넌트 렌더링
  switch (loginType) {
    case 'ROLE_CENTER':
      return <CenterMyPage />;
    case 'ROLE_VOLUNTEER':
      return <PersonalMyPage />;
    default:
      // 로그인 정보가 없거나 잘못된 경우 로그인 페이지로 리다이렉트
      return <Navigate to="/login" replace />;
  }
};

const HomeRouter = () => {
  // localStorage 체크
  const isFirstVisit = localStorage.getItem('login-storage') !== null;

  // 로그인 상태에 따라 리다이렉션
  return isFirstVisit ? <Navigate to="/main" replace /> : <Navigate to="/landing" replace />;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomeRouter />
      },
      {
        path: '/main',
        element: <MainPage />
      },
      {
        path: '/landing',
        element: <LandingPage />
      },
      {
        path: '/center-contact',
        element: <CenterContactPage />
      },
      {
        path: '/aidrqlist',
        element: <AidRqListPage />
      },
      {
        path: '/aidrqdetail/:id',
        element: (
          <ProtectedRoute>
            <AidRqDetailPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/mypage',
        element: (
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/mypage/adminaidreqlist',
        element: (
          <ProtectedRoute>
            <AdminAidRqListPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/mypage/adminaidreqcreate',
        element: (
          <ProtectedRoute>
            <AidRqCreatePage />
          </ProtectedRoute>
        )
      },
      {
        path: '/mypage/adminaidreqmodify',
        element: (
          <ProtectedRoute>
            <AidRqModifyPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/mypage/adminaidreqlist/:id',
        element: (
          <ProtectedRoute>
            <AidRqDetailAdminPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/mypage/adminaidreqlist/:id/applicantList',
        element: (
          <ProtectedRoute>
            <AidRqApplicantListPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      },
      {
        path: '/success',
        element: <SuccessPage />
      },
      {
        // TODO: 추후 라우팅 통합할 예정
        path: '/center-detail',
        element: (
          <ProtectedRoute>
            <CenterDetailInfoPage />
          </ProtectedRoute>
        )
      },
      {
        // TODO: 추후 라우팅 통합할 예정
        path: '/volunteer-detail',
        element: (
          <ProtectedRoute>
            <VolunteerDetailInfoPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <PersonalProfilePage />
          </ProtectedRoute>
        )
      },
      {
        path: '/profile/:userId',
        element: (
          <ProtectedRoute>
            <PersonalProfilePage />
          </ProtectedRoute>
        )
      },
      {
        path: '/community',
        element: <CommunityListPage />
      },
      {
        path: '/community/:content_id',
        element: (
          <ProtectedRoute>
            <CommunityDetailPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/communitycreate',
        element: (
          <ProtectedRoute>
            <CommunityCreatePage />
          </ProtectedRoute>
        )
      },
      {
        path: '/communitycreate/:content_id',
        element: (
          <ProtectedRoute>
            <CommunityCreatePage />
          </ProtectedRoute>
        )
      },
      {
        path: '/centerprofile/:center_id',
        element: (
          <ProtectedRoute>
            <CenterProfilePage />
          </ProtectedRoute>
        )
      },
      {
        path: '/findnearmyactivity',
        element: <FindNearByActivityPage />
      },
      {
        path: '/error/login',
        element: <LoginErrorPage />
      },
      {
        path: '/error',
        element: <NotFoundPage />
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
