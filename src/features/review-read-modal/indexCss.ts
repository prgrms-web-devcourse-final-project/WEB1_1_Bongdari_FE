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
  /* padding: 50px 68px 31px 77px; */
  padding: 1rem;
`;

export const ScrollSection = styled.div`
  max-height: 100%;
  overflow-y: auto; // 세로 스크롤
  padding: 50px;

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

export const ReviewTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReviewTitle = styled.h1`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 600;
  cursor: default;
`;

export const CreatedAt = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: #747474;
  cursor: default;
`;

export const ReviewImgBox = styled.div`
  width: 100%;
  height: 395px;
  border-radius: 25px;
  background-color: #e9e9e9;
  overflow: hidden;
  margin: 38px auto 0;
`;

export const ReviewImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ReviewContent = styled.div`
  padding: 45px 0;
`;

export const ProfileBox = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 25px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 24px 31px 23px 35px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
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
`;

export const GloveImg = styled.img`
  /* 추가 예정 */
  width: 24px;
  height: 24px;
`;

export const GoToProfileButton = styled(Button)`
  width: 221px;
  height: 53px;
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 600;
  border-radius: 13px;
`;
