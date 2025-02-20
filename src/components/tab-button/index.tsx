import TabButton from './ui';
import TabGroupWrapper from './indexCss';
import type { TabButtonData } from './logic/useTabButtonGroup';
import useTabButtonGroup from './logic/useTabButtonGroup';

type TabButtonGroupProps = {
  tabs: TabButtonData[]; // 버튼 데이터 배열 - 탭 버튼 개수 설정하기 위한 타입
  initialActiveTab?: string; // default 활성화 탭 버튼 (옵션)
  onTabChange?: (activeTab: string) => void; // 탭 변경 시 실행할 콜백 함수 (옵션)
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
};

const TabButtonGroup = ({
  tabs,
  initialActiveTab,
  onTabChange,
  width = '167px',
  height,
  fontSize = '16px',
  borderRadius
}: TabButtonGroupProps) => {
  const { activeTab, handleTabClick } = useTabButtonGroup({
    tabs,
    initialActiveTab,
    onTabChange
  });

  return (
    <TabGroupWrapper>
      {tabs.map((tab) => (
        <TabButton
          key={tab.label}
          label={tab.label}
          onClick={() => handleTabClick(tab.label)}
          fontSize={fontSize}
          width={width}
          height={height}
          borderRadius={borderRadius || ''}
          variant={activeTab === tab.label ? `clicked` : `notClicked`}
        />
      ))}
    </TabGroupWrapper>
  );
};
export default TabButtonGroup;
