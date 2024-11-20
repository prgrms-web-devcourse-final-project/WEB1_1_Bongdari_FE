import { useState } from 'react';

import TabButton from './ui';
import TabGroupWrapper from './indexCss';

type TabButtonData = {
  label: string;
};

type TabButtonGroupProps = {
  tabs: TabButtonData[]; // 버튼 데이터 배열 - 탭 버튼 개수 설정하기 위한 타입
  initialActiveTab?: string; // default 활성화 탭 버튼 (옵션)
  onTabChange?: (activeTab: string) => void; // 탭 변경 시 실행할 콜백 함수 (옵션)
};

const TabButtonGroup = ({ tabs, initialActiveTab, onTabChange }: TabButtonGroupProps) => {
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab || tabs[0].label);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  return (
    <TabGroupWrapper>
      {tabs.map((tab) => (
        <TabButton
          key={tab.label}
          label={tab.label}
          onClick={() => handleTabClick(tab.label)}
          border={activeTab === tab.label ? 'none' : ''}
          borderRadius="10px"
          fontSize="16px"
          bgColor={activeTab === tab.label ? '' : '#FFFFFF'}
          color={activeTab === tab.label ? '#FFFFFF' : ''}
          width="167px"
        />
      ))}
    </TabGroupWrapper>
  );
};
export default TabButtonGroup;
