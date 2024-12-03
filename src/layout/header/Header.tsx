import { Link } from 'react-router-dom';
import { AlertBox, AlertPositioning, Contents, Logo, Menu, Wrapper } from './HeaderCss';
import Alert from '@/features/alert';
import { useState } from 'react';

export default function Header() {
  const [alertState, setAlertState] = useState(false);
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
          <Link to="/" className="link">
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
