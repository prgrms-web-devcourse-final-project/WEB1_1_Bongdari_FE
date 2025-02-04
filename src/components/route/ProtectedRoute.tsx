import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { type PropsWithChildren } from 'react';
import axiosInstance from '@/api/apis';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { AxiosError } from 'axios';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasBasicInfo, setHasBasicInfo] = useState<boolean | null>(null);
  const location = useLocation();
  const loginType = useLoginStore((state) => state.loginType);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    let isMounted = true; // 컴포넌트 언마운트 체크

    const checkBasicInfo = async () => {
      try {
        const response = await axiosInstance.get('api/user/check/basic-info');

        // 컴포넌트가 마운트된 상태일 때만 상태 업데이트
        if (isMounted) {
          setHasBasicInfo(response.data);
        }
      } catch (error: unknown) {
        const axiosError = error as AxiosError;

        if (isMounted) {
          // 토큰 만료 체크
          if (axiosError.response?.status === 401 || axiosError.response?.status === 403) {
            sessionStorage.removeItem('token');
            // 로그인 리다이렉트 로직 필요하면 추가하기
          }
          console.error('상세정보 확인 실패:', error);
          setHasBasicInfo(false);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    // 토큰이 존재하고 유효한 형식인지 확인
    if (token && token.split('.').length === 3) {
      checkBasicInfo();
    } else {
      setIsLoading(false);
    }

    // cleanup 함수
    return () => {
      isMounted = false;
    };
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 로그인 체크
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 상세정보가 없는 경우의 리다이렉션 로직
  if (!hasBasicInfo) {
    // 이미 detail 페이지에 있다면 그대로 유지
    if (location.pathname.includes('-detail')) {
      return <>{children}</>;
    }

    // detail 페이지가 아닌 다른 페이지로 이동하려고 할 때 리다이렉션
    const redirectPath = loginType === 'ROLE_CENTER' ? '/center-detail' : '/volunteer-detail';
    return <Navigate to={redirectPath} replace />;
  }

  // 상세정보가 있는 경우, detail 페이지 접근 방지
  if (hasBasicInfo && location.pathname.includes('-detail')) {
    return <Navigate to="/main" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
