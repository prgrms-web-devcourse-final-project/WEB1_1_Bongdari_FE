import useAdminSearchStore from '@/store/stores/admin-search/searchStore';
import useSearchStore from '@/store/stores/search/searchStore';
import { useLocation } from 'react-router-dom';

const useChangeStatusTab = () => {
  const location = useLocation();
  const isAidrqlist = location.pathname === '/aidrqlist';
  const searchSetState = useSearchStore((state) => state.setSearchState);
  const adminSetState = useAdminSearchStore((state) => state.setSearchState);
  const setSearchState = isAidrqlist ? searchSetState : adminSetState;

  const handleTabChange = (tab: string) => {
    const statusMapping: { [key: string]: string } = {
      모집중: 'RECRUITING',
      모집완료: 'CLOSED',
      모집종료: 'COMPLETED'
    };
    setSearchState({
      status: statusMapping[tab]
    });
  };

  return {
    handleTabChange
  };
};

export default useChangeStatusTab;
