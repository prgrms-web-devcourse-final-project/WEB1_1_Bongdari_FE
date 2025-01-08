import theme from '@/styles/theme';
import styled from 'styled-components';

interface TabMenuItemProps {
  // styled-components에서 HTML 속성과 충돌을 피하기 위해 $prefix 사용했습니다
  $isSelected?: boolean;
}

export const TabMenuContainer = styled.div`
  max-width: 183px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;
  padding: 6px;
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};

  @media (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
    flex-direction: row;
  }
`;

export const TabMenuItem = styled.button<TabMenuItemProps>`
  color: ${(props) => (props.$isSelected ? theme.pointColor.event : '#cacaca')};
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 600;
  border: none;
  padding: 22px 20px;
  width: 100%;
  text-align: start;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? '#DFEDFF' : '#ffffff')};
  transition: 0.3s;

  &:hover {
    color: ${theme.pointColor.event};
    background-color: #dfedff;
  }

  &:active {
    color: ${theme.pointColor.clicked};
  }

  @media (max-width: 1000px) {
    text-align: center;
    padding: 18px 3px;
  }
`;
