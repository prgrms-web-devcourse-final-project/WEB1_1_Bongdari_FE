import theme from '@/styles/theme';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 53px 70px 72px 70px; */
  padding: 1rem;
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const ScrollSection = styled.div`
  max-height: 100%;
  overflow-y: auto; // 세로 스크롤
  padding: 50px;
  overflow-x: hidden;

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

export const SimpleProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SimpleProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 49px;
`;

export const ProfileTitle = styled.p`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 600;
`;

export const SimpleProfileList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const ProfileListItem = styled.li`
  display: flex;
  gap: 33px;
  align-items: center;
`;

export const ItemLabel = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 600;
  color: #282828;
  width: 75px;
  height: 100%;
`;

export const ItemText = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  color: #828282;
  /* width: 370px; */
`;

export const DetailProfileList = styled.ul`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 24px;
  gap: 26px 0;
  margin-top: 150px;
`;

export const ProfileImgWrapper = styled.div`
  width: 182px;
  height: 182px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #d9d9d9;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Tier = styled.img`
  width: 28px;
  height: 28px;
`;

export const Introduction = styled.p`
  line-height: 1.4;
  font-size: ${theme.fontSize.seventhSize};
  color: #828282;
  width: 370px;
`;
