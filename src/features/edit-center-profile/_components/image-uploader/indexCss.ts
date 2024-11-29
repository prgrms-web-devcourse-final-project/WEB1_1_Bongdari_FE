import theme from '@/styles/theme';
import styled from 'styled-components';

export const UploadContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 244px;
  height: 244px;
`;

export const ImageCircle = styled.div`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: #b3b3b3;
  overflow: hidden;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadButton = styled.label`
  position: absolute;
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: ${theme.pointColor.Regular};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56px;
  font-weight: 100;
  color: #ffffff;
  right: 0;
  bottom: 1rem;
  padding-bottom: 5px;
  z-index: 1;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  &:hover {
    background-color: ${theme.pointColor.event};
    transition: 0.3s;
  }
  &:active {
    background-color: ${theme.pointColor.clicked};
  }
`;
