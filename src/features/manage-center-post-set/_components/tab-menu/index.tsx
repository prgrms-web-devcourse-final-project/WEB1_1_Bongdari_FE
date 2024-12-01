import { TabMenuContainer, TabMenuItem } from './indexCss';

interface TabMenuItemProps {
  selectedMenuItem: number;
  setSelectedMenuItem: (index: number) => void;
}

const TabMenu: React.FC<TabMenuItemProps> = ({ selectedMenuItem, setSelectedMenuItem }) => {
  return (
    <TabMenuContainer>
      <TabMenuItem $isSelected={selectedMenuItem === 0} onClick={() => setSelectedMenuItem(0)}>
        도움요청관리
      </TabMenuItem>
      <TabMenuItem $isSelected={selectedMenuItem === 1} onClick={() => setSelectedMenuItem(1)}>
        쪽지 리스트
      </TabMenuItem>
      <TabMenuItem $isSelected={selectedMenuItem === 2} onClick={() => setSelectedMenuItem(2)}>
        내 기관 평가 보기
      </TabMenuItem>
    </TabMenuContainer>
  );
};

export default TabMenu;
