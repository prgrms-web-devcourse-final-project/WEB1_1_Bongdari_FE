import theme from '@/styles/theme';
import styled from 'styled-components';

export const SearchBox = styled.div`
  max-width: 500px;
  width: 90%;
  height: 100vh;
  padding: 1rem;
`;

export const ScrollSection = styled.div`
  max-height: 100%;
  overflow-y: auto; // 세로 스크롤
  padding: 50px 30px;

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

export const MapPageTitle = styled.p`
  font-size: ${theme.fontSize.fifthSize};
  font-weight: 700;
`;

export const SearchBarComponent = styled.div`
  width: 100%;
  padding: 17px 0 25px 0;
  display: flex;
  gap: 5px;
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;
