import theme from '@/styles/theme';
import styled from 'styled-components';

interface TabMenuItemProps {
  // styled-components에서 HTML 속성과 충돌을 피하기 위해 $prefix 사용했습니다
  $isSelected?: boolean;
}

export const TabMenuContainer = styled.div`
  max-width: 183px;
  width: 20%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 6px;
  padding: 6px;
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
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
`;
