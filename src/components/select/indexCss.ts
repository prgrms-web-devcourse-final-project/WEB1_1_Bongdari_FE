import styled from 'styled-components';
import theme from '@/styles/theme';

export const Box = styled.div<{ width: string; height: string; isOpen: boolean }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 12px;
  background: white;
  color: #414141;
  padding: 0 15px;
  border: 1px solid #dbdbdb;
  outline: none;
  transition: 0.2s;
  font-size: ${theme.fontSize.seventhSize};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    border: 1px solid #62a6ff;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);

  & > img {
    width: 30px;
  }
`;

export const List = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  max-height: 200px;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  background-color: white;
  overflow-y: auto;
  z-index: 1000;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const ListItem = styled.li<{ isSelected?: boolean }>`
  list-style: none;
  padding: 16px;
  cursor: pointer;
  transition: 0.2s;
  color: #414141;
  font-size: ${theme.fontSize.seventhSize};
  background-color: ${(props) => (props.isSelected ? '#f5f8ff' : 'transparent')};

  &:hover {
    background-color: #f5f8ff;
  }

  &:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;
