import { Link } from 'react-router-dom';
import { Contents, Logo, Menu, Wrapper } from './HeaderCss';

export default function Header() {
  return (
    <Wrapper>
      <Contents>
        <Link to="/main" className="link">
          <Logo>SOMEMORE</Logo>
        </Link>
        <Menu>
          <Link to="/aidrqlist" className="link">
            <li>활동구인</li>
          </Link>
          <Link to="/main" className="link">
            <li>주변활동찾기</li>
          </Link>
          <Link to="/main" className="link">
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
