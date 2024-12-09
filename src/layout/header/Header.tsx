import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {
  AlertBox,
  AlertPositioning,
  Contents,
  LoginBtn,
  Logo,
  LogoutBtn,
  Menu,
  StyledToastContainer,
  Wrapper
} from './HeaderCss';
import Alert from '@/features/alert';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { AlertType } from '@/shared/types/alert-type/AlertType';
import { centerLogout } from './logic/centerLogout';
import { personLogout } from './logic/personLogout';
import axiosInstance from '@/api/apis';

export default function Header() {
  const [alertState, setAlertState] = useState(false);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const clearLoginInfo = useLoginStore((state) => state.clearLoginInfo);
  const loginType = useLoginStore((state) => state.loginType);
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState<AlertType[]>([]);

  const fetchNotifications = async () => {
    try {
      const response = await axiosInstance(`/api/notification/unread`);
      const data = await response.data;
      setNotifications(data); // data형식 보고 이부분 수정해야함
    } catch (error) {
      console.error('알림을 가져오는데 실패했습니다:', error);
    }
  };

  useEffect(() => {
    console.log('notifications', notifications);
  }, [notifications]);

  useEffect(() => {
    let eventSource: EventSource;

    const connectSSE = () => {
      console.log('SSE 연결 시도'); // 연결 시도 확인
      eventSource = new EventSource(`${import.meta.env.VITE_APP_BASE_URL}/api/sse/subscribe`, {
        withCredentials: true
      });

      // 연결 성공 시 호출되는 핸들러 추가
      eventSource.onopen = () => {
        console.log('SSE 연결 성공!');
        toast.success('SSE가 연결되었습니다', {
          position: 'top-right',
          autoClose: 3000
        });
      };

      eventSource.onmessage = async (event) => {
        const newNotification: AlertType = JSON.parse(event.data);
        // 새 알림이 오면 토스트 메시지 표시
        toast.info(newNotification.title, {
          position: 'top-right',
          autoClose: 5000
        });

        await fetchNotifications();
      };

      // 연결 에러 처리
      eventSource.onerror = (error) => {
        console.error('SSE 연결 에러:', error);
        eventSource.close();
        // 재연결 로직 할라면 여기에 추가
      };
    };

    // 로그인 상태일 때만 SSE 연결
    if (isLoggedIn) {
      connectSSE();
      fetchNotifications();
    }

    // 컴포넌트 언마운트 시 SSE 연결 종료
    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [isLoggedIn]); // isLoggedIn이 변경될 때마다 useEffect 실행

  return (
    <Wrapper>
      <Contents>
        <Link to="/" className="link">
          <Logo>SOMEMORE</Logo>
        </Link>
        <Menu>
          {!isLoggedIn && (
            <LoginBtn
              onClick={() => {
                navigate('/login');
              }}>
              로그인
            </LoginBtn>
          )}
          {isLoggedIn && (
            <LogoutBtn
              onClick={async () => {
                if (loginType === 'ROLE_CENTER') {
                  clearLoginInfo();
                  const response = await centerLogout();
                  console.log(response);
                } else if (loginType === 'ROLE_VOLUNTEER') {
                  clearLoginInfo();
                  const response = await personLogout();
                  console.log(response);
                }
              }}>
              로그아웃
            </LogoutBtn>
          )}
          <AlertPositioning>
            {alertState && <Alert notifications={notifications} fetchNotifications={fetchNotifications}></Alert>}
          </AlertPositioning>
          <AlertBox
            hasNotifications={notifications.length > 0}
            onClick={() => {
              setAlertState((prev) => !prev);
            }}>
            <img src="assets/imgs/alert-icon.svg" alt="" />
          </AlertBox>
          <Link to="/aidrqlist" className="link">
            <li>활동구인</li>
          </Link>
          <Link to="/findnearmyactivity" className="link">
            <li>주변활동찾기</li>
          </Link>
          <Link to="/community" className="link">
            <li>커뮤니티</li>
          </Link>
          {isLoggedIn && (
            <Link to="/mypage" className="link">
              <li>마이페이지</li>
            </Link>
          )}
        </Menu>
      </Contents>
      <StyledToastContainer />
    </Wrapper>
  );
}
