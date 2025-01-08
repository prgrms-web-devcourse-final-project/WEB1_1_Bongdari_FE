import { Link } from 'react-router-dom';

import { Close, Overlay, RightMenuList, Wrapper } from './indexCss';

interface RightMenuProps {
  rightMenuState: boolean;
  setRightMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
}

const RightMenu = ({ rightMenuState, setRightMenuState, isLoggedIn }: RightMenuProps) => {
  return (
    <>
      <Overlay $rightMenuState={rightMenuState} onClick={() => setRightMenuState(false)} />
      <Wrapper $rightMenuState={rightMenuState}>
        <Close
          onClick={() => {
            setRightMenuState(false);
          }}>
          <i className="fa-solid fa-x"></i>
        </Close>
        <RightMenuList>
          <Link to="/aidrqlist" className="link">
            <li
              onClick={() => {
                setRightMenuState(false);
              }}>
              활동구인
            </li>
          </Link>
          <Link to="/findnearmyactivity" className="link">
            <li
              onClick={() => {
                setRightMenuState(false);
              }}>
              주변활동찾기
            </li>
          </Link>
          <Link to="/community" className="link">
            <li
              onClick={() => {
                setRightMenuState(false);
              }}>
              커뮤니티
            </li>
          </Link>
          {isLoggedIn && (
            <Link to="/mypage" className="link">
              <li
                onClick={() => {
                  setRightMenuState(false);
                }}>
                마이페이지
              </li>
            </Link>
          )}
        </RightMenuList>
      </Wrapper>
    </>
  );
};

export default RightMenu;
