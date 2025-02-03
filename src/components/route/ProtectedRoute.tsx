import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { type PropsWithChildren } from 'react';
import axiosInstance from '@/api/apis';
import { useLoginStore } from '@/store/stores/login/loginStore';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasBasicInfo, setHasBasicInfo] = useState<boolean | null>(null);
  const location = useLocation();
  const loginType = useLoginStore((state) => state.loginType);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const checkBasicInfo = async () => {
      try {
        const response = await axiosInstance.get('api/user/check/basic-info');
        setHasBasicInfo(response.data);
      } catch (error) {
        console.error('상세정보 확인 실패:', error);
        setHasBasicInfo(false);
      } finally {
        setIsLoading(false);
      }
    };

    // 로그인 상태일 때만 상세정보 체크
    if (token) {
      checkBasicInfo();
    } else {
      setIsLoading(false);
    }
  }, [token]);

  if (isLoading) {
    return null;
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
