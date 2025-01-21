import { TinyMceContainer } from '@/components/tinyMCE-editor';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
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

export const Contents = styled.div`
  & > div {
    display: flex;
    gap: 1rem;
    padding-top: 10px;
    justify-content: space-between;

    & > *:last-child {
      flex: 1;
    }

    & > span {
      display: inline-block;
      width: 40px;
      font-size: 14px;
      padding-top: 5px;
      color: #656565;
    }
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 40px;
`;

export const ReviewText = styled(TinyMceContainer)`
  height: 500px;
`;

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: end;
  padding-top: 50px;

  & > button {
    width: 220px;
    height: 53px;
    background-color: #2382ff;
    border: none;
    border-radius: 13px;
    outline: none;
    color: white;
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
      background-color: #0a66de;
      cursor: pointer;
    }
  }
`;
