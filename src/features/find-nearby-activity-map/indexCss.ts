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
`;

export const NearbyButton = styled.button`
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
  }
`;

export const RefreshIcon = styled.img`
  ${NearbyButton}:hover & {
    animation: ${rotate} 0.5s linear;
  }
`;
