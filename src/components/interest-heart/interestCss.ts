// import theme from '@/styles/theme';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface InterestHeartBtnCssProps {
  children: ReactNode;
  top: string;
  right: string;
}

export const InterestHeartBtnCss = styled.button<InterestHeartBtnCssProps>`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  background-color: white;
  text-align: center;
  cursor: pointer;

  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  &:active {
    background-color: rgba(0, 0, 0, 0.01);
  }

  &.disabled {
    display: none;
  }

  img {
    width: 100%;
    height: 23px;
    padding-top: 5px;
  }
`;
