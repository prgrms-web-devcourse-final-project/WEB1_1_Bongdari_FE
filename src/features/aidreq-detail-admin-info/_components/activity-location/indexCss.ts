import theme from '@/styles/theme';
import styled from 'styled-components';

export const LocationBox = styled.div`
  display: flex;
  border-bottom: 1px solid #d1d1d1;
  justify-content: center;
  align-items: center;
  padding: 42px 138px 42px 128px;
`;

export const LocationIcon = styled.img`
  width: 33px;
  height: 34px;
`;

export const LocationText = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 500;
`;

export const MapButton = styled.button`
  color: #555555;
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 17px;
  text-align: center;
  width: 100%;
`;
