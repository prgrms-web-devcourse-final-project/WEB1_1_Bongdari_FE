import theme from '@/styles/theme';
import styled from 'styled-components';

export const LocationButtonBox = styled.div`
  position: absolute;
  z-index: 500;
  bottom: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
`;

export const MyLocationButton = styled.button`
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  border: 1px solid ${theme.pointColor.Regular};
  background-color: #ffffff;
  color: ${theme.pointColor.Regular};
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NearbyButton = styled.button`
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  border: 1px solid ${theme.pointColor.Regular};
  background-color: #ffffff;
  color: ${theme.pointColor.Regular};
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
