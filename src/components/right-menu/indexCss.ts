import styled from 'styled-components';

export const Wrapper = styled.div<{ $rightMenuState: boolean }>`
  width: 300px;
  height: 100vh;
  background-color: white;
  position: absolute;
  transition: 0.2s;
  padding: 1rem;
  top: 0;
  right: ${(props) => (props.$rightMenuState ? '0' : '-100%')};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: none;
  z-index: 999;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const Overlay = styled.div<{ $rightMenuState: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$rightMenuState ? 'block' : 'none')};
  z-index: 998;
`;

export const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  & > i {
    opacity: 0.8;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const RightMenuList = styled.ul`
  padding: 2rem;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & li {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;

    &:hover {
      color: black;
    }
  }
`;
