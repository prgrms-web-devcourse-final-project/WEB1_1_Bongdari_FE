import TabButtonGroup from '@/components/tab-button';
import { Wrapper } from './indexCss';
import useChangeStatusTab from '@/shared/hooks/useChangeStatusTab';

const Tab = () => {
  const { handleTabChange } = useChangeStatusTab();
  return (
    <Wrapper>
      <TabButtonGroup
        onTabChange={handleTabChange}
        tabs={[{ label: '모집중' }, { label: '모집완료' }, { label: '모집종료' }]}></TabButtonGroup>
    </Wrapper>
  );
};

export default Tab;
