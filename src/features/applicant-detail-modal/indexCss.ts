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

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const GridSection1 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridSection2 = styled.div`
  display: flex;
  justify-content: end;
  align-items: start;
  padding: 0 3rem 0 8px;

  // 이미지를 감싸는 div 스타일
  > div {
    width: 182px;
    height: 182px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #d9d9d9;
  }
`;

export const GridSection3 = styled.div`
  display: flex;
  grid-column: 1 / -1;
  gap: 28px;
  padding: 28px 0;
`;

export const SimpleProfileList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const SimpleItem = styled.li`
  display: flex;
  gap: 28px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 600;
  padding-bottom: 48px;
`;

export const Key = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 600;
  color: #282828;
  width: 75px;
  flex-shrink: 0;
`;

export const Value = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  color: #828282;
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

// 디테일 박스 --------------------------------------------
export const SectionBox = styled.ul`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};

  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 33px 28px;
  gap: 27px;
  margin-top: 100px;
`;

export const DetailItem = styled.li`
  display: flex;
`;
