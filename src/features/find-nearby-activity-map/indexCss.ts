import Button from '@/components/button';
import theme from '@/styles/theme';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(90deg)
  }
`;

export const LocationButtonBox = styled.div`
  position: absolute;
  z-index: 500;
  bottom: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;

  @media (max-width: 1000px) {
    bottom: 100px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }
`;

export const MyLocationButton = styled.button`
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  border: 1px solid ${theme.pointColor.Regular};
  background-color: #ffffff;
  color: ${theme.pointColor.Regular};
  width: 94px;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 46px;
    height: 46px;

    & > img {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const NearbyButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 298px;
  height: 60px;
  border: 1px solid ${theme.pointColor.event};
  border-radius: 13px;
  background-color: #ffffff;
  color: ${theme.pointColor.event};
  font-size: ${theme.fontSize.seventhSize};
  cursor: pointer;
  transition: 0.3s;

  &:active {
    color: ${theme.pointColor.clicked};
    border: 1px solid ${theme.pointColor.clicked};
    background-color: #d9e8fa;
  }

  @media (max-width: 1000px) {
    width: 220px;
    height: 44px;
    border-radius: 18px;
    font-size: ${theme.fontSize.eighthSize};
  }
`;

export const RefreshIcon = styled.img`
  ${NearbyButton}:hover & {
    animation: ${rotate} 0.5s linear;
  }
`;
