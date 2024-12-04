import { Observer, Wrapper } from './indexCss';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import AidRqListAdmin from '@/features/aidrq-list-admin';
import useAdminSearchStore from '@/store/stores/admin-search/searchStore';
import { useInfiniteCenterBoards } from '@/shared/hooks/useCenterInfiniteAidRq';

interface AidRqAdminListWrapperProps {
  centerId: string;
}

const AidRqAdminListWrapper = ({ centerId }: AidRqAdminListWrapperProps) => {
  const { keyword, category, region, admitted, sort, status } = useAdminSearchStore();

  const { data, fetchNextPage, hasNextPage, searchAidRequests, isLoading } = useInfiniteCenterBoards(
    centerId,
    keyword,
    category,
    region,
    admitted,
    sort,
    status
  );

  const { ref, inView } = useInView();

  useEffect(() => {
    searchAidRequests();
  }, [status]);

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log('Fetching next page,');
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const finalData = data?.pages?.flatMap((page) => page.items.data.data.content) || [];

  useEffect(() => {
    console.log(finalData);
  }, [finalData]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Wrapper>
      <AidRqListAdmin finalData={finalData} />
      <Observer ref={ref} />
    </Wrapper>
  );
};

export default AidRqAdminListWrapper;
