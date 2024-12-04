import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { AlertBox, AlertPositioning, Contents, Logo, Menu, Wrapper } from './HeaderCss';
import Alert from '@/features/alert';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { AlertType } from '@/shared/types/alert-type/AlertType';

export default function Header() {
  const [alertState, setAlertState] = useState(false);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  useEffect(() => {
    let eventSource: EventSource;

    const connectSSE = () => {
      eventSource = new EventSource(`${import.meta.env.VITE_APP_BASE_URL}/api/sse/subscribe`, {
        withCredentials: true
      });

      eventSource.onmessage = (event) => {
        const newNotification: AlertType = JSON.parse(event.data);
        // 새 알림이 오면 토스트 메시지 표시
        toast.info(newNotification.title, {
          position: 'top-right',
          autoClose: 5000
        });
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
          <AlertPositioning>{alertState && <Alert></Alert>}</AlertPositioning>
          <AlertBox
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
          <Link to="/" className="link">
            <li>커뮤니티</li>
          </Link>
          <Link to="/centermypage" className="link">
            <li>마이페이지</li>
          </Link>
        </Menu>
      </Contents>
    </Wrapper>
  );
}
