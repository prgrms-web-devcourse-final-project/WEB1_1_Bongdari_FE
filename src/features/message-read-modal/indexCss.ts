import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  margin: auto;
  padding: 1rem;
  overflow: hidden;

  @media (max-width: 1000px) {
    justify-content: flex-start;
    align-items: stretch;
    height: 100%;
  }
`;

export const ScrollSection = styled.div`
  height: 100%;
  overflow-y: auto; // 세로 스크롤
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    padding: 2rem 1rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    height: 50%;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const MessageTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MessageTitle = styled.h1`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 600;
  cursor: default;

  @media (max-width: 1000px) {
    font-size: ${theme.fontSize.sixthSize};
  }
`;

export const CreatedAt = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: #747474;
  cursor: default;
`;

export const MessageContent = styled.div`
  font-size: ${theme.fontSize.seventhSize};
  color: #777777;
  line-height: 1.2;
  padding: 39px 0 34px 0;
  cursor: default;

  @media (max-width: 1000px) {
    font-size: ${theme.fontSize.eighthSize};
  }
`;

export const ProfileBox = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 25px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 24px 31px 23px 35px;
  margin-top: auto;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    gap: 29px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #b3b3b3;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NickName = styled.p`
  font-size: ${theme.fontSize.fifthSize};
  font-weight: 600;
  padding: 0 14px 0 24px;
  cursor: default;

  @media (max-width: 1000px) {
    padding: 0 14px;
  }
`;

export const GloveImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const GoToProfileButton = styled(Button)`
  width: 221px;
  height: 53px;
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 600;
  border-radius: 13px;

  @media (max-width: 1000px) {
    width: 100%;
    height: 40px;
  }
`;
