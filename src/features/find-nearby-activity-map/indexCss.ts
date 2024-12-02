import theme from '@/styles/theme';
import styled from 'styled-components';

export const MyLocationButton = styled.div`
  position: absolute;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  z-index: 500;
  bottom: 50px;
  right: 50px;
  border: 1px solid ${theme.pointColor.Regular};
  background-color: #ffffff;
  color: ${theme.pointColor.Regular};
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
