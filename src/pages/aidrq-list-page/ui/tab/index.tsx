import { useLocation } from 'react-router-dom';

import TabButtonGroup from '@/components/tab-button';
import { Wrapper } from './indexCss';
import useSearchStore from '@/store/stores/search/searchStore';
import useAdminSearchStore from '@/store/stores/admin-search/searchStore';

const Tab = () => {
  //페이지에 따른 store처리
  const location = useLocation();
  const isAidrqlist = location.pathname === '/aidrqlist';
  const searchSetState = useSearchStore((state) => state.setSearchState);
  const adminSetState = useAdminSearchStore((state) => state.setSearchState);
  const setSearchState = isAidrqlist ? searchSetState : adminSetState;

  return (
    <Wrapper>
      <TabButtonGroup
        onTabChange={(tab) => {
          setSearchState({
            status: tab
          });
        }}
        tabs={[{ label: '모집중' }, { label: '모집완료' }, { label: '모집종료' }]}></TabButtonGroup>
    </Wrapper>
  );
};

export default Tab;
