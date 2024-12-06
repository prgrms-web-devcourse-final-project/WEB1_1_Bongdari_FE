import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { AlertBox, AlertPositioning, Contents, Logo, Menu, Wrapper } from './HeaderCss';
import Alert from '@/features/alert';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { AlertType } from '@/shared/types/alert-type/AlertType';
import { centerLogout } from './logic/centerLogout';
import { personLogout } from './logic/personLogout';

export default function Header() {
  const [alertState, setAlertState] = useState(false);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const clearLoginInfo = useLoginStore((state) => state.clearLoginInfo);
  const loginType = useLoginStore((state) => state.loginType);
  const navigate = useNavigate();

  useEffect(() => {
    let eventSource: EventSource;

    //테스트용

    // const setTestTokenCookie = () => {
    //   const testToken =
    //     'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjM2NzZkMDI4LTc0NDgtNDhhYS1iYWQ4LTcxY2U2NTEzMjE0ZCIsInJvbGUiOiJST0xFX1ZPTFVOVEVFUiIsImp0aSI6IjI1YTQxOTViLTNiMjQtNDMwYy1iMmJlLTQ0MDg3MGQ1ZGJlNiIsImlhdCI6MTczMzQ4MjM0OCwiZXhwIjoxNzM0MDg3MTQ4fQ.XW9g4LYaHBA3eoZG0-pn5tr70s9Io-R1wTQzxlM98Qw';
    //   document.cookie = `ACCESS="Bearer ${testToken}"; path=/`;
    // };

    //테스트용

    const connectSSE = () => {
      //테스트용
      // setTestTokenCookie();
      //테스트용

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

    //테스트용
    // connectSSE();
    //테스트용

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
          <button
            onClick={() => {
              navigate('/login');
            }}>
            로그인
          </button>
          <button
            onClick={async () => {
              if (loginType === 'center') {
                clearLoginInfo();
                const response = await centerLogout();
                console.log(response);
              } else if (loginType === 'person') {
                clearLoginInfo();
                const response = await personLogout();
                console.log(response);
              }
            }}>
            로그아웃
          </button>
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
          <Link to="/community" className="link">
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
