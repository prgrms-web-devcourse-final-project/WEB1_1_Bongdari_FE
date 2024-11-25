import { useState } from 'react';

export type TabButtonData = {
  label: string;
};

export type TabButtonGroupLogicProps = {
  tabs: TabButtonData[]; // 버튼 데이터 배열 - 탭 버튼 개수 설정하기 위한 타입
  initialActiveTab?: string; // default 활성화 탭 버튼 (옵션)
  onTabChange?: (activeTab: string) => void; // 탭 변경 시 실행할 콜백 함수 (옵션)
};

const useTabButtonGroup = ({ tabs, initialActiveTab, onTabChange }: TabButtonGroupLogicProps) => {
  const [activeTab, setActiveTab] = useState<string>(initialActiveTab || tabs[0]?.label);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  return {
    activeTab,
    handleTabClick
  };
};

export default useTabButtonGroup;
