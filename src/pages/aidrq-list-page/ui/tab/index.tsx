import TabButtonGroup from '@/components/tab-button';
import { Wrapper } from './indexCss';

const Tab = () => {
  return (
    <Wrapper>
      <TabButtonGroup tabs={[{ label: '모집중' }, { label: '모집완료' }, { label: '모집종료' }]}></TabButtonGroup>
    </Wrapper>
  );
};

export default Tab;
