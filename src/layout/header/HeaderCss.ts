import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const Contents = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .link {
    text-decoration: none;
  }
`;

export const Logo = styled.h1`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 80%;

  & > .link {
    text-decoration: none;
    height: 100%;

    & > li {
      color: rgba(0, 0, 0, 0.7);
      font-weight: 600;
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;

      &:hover {
        color: #2382ff;
        background-color: #e9f2ff;
        cursor: pointer;
      }
    }
  }
`;

export const AlertBox = styled.li`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 18px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const AlertPositioning = styled.div`
  position: relative;
  height: 100%;
`;

export const LoginBtn = styled.button`
  padding: 5px 20px;
  border: 1px solid #62a6ff;
  border-radius: 30px;
  background-color: white;
  color: #2382ff;

  &:hover {
    border: 1px solid #2382ff;
    cursor: pointer;
  }
`;

export const LogoutBtn = styled.button`
  padding: 5px 20px;
  border: 1px solid #62a6ff;
  border-radius: 30px;
  background-color: white;
  color: #2382ff;

  &:hover {
    border: 1px solid #2382ff;
    cursor: pointer;
  }
`;

// Styled ToastContainer component
export const StyledToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    width: 320px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .Toastify__toast {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    font-family: inherit;
  }

  .Toastify__toast--success {
    border-left: 4px solid #4caf50;
  }

  .Toastify__toast--error {
    border-left: 4px solid #f44336;
  }

  .Toastify__toast--info {
    border-left: 4px solid #2196f3;
  }

  .Toastify__close-button {
    color: #666;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  .Toastify__progress-bar {
    height: 3px;
  }
`;
