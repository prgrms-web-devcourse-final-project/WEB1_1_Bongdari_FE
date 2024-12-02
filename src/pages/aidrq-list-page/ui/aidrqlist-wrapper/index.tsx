import AidRqList from '@/features/aidrq-list-regular';
import { Wrapper, Observer } from './indexCss';
import { useInfiniteAidRq } from '@/shared/hooks/useInfiniteAidRq';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import useSearchStore from '@/store/stores/search/searchStore';

const AidRqListWrapper = () => {
  const { keyword, type, region, admitted, sort, status } = useSearchStore();

  const { data, fetchNextPage, hasNextPage, searchAidRequests, isLoading } = useInfiniteAidRq(
    keyword,
    type,
    region,
    admitted,
    sort,
    status
  );

  const { ref, inView } = useInView();

  useEffect(() => {
    searchAidRequests();
  }, []);

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
      <AidRqList finalData={finalData}></AidRqList>
      <Observer ref={ref}></Observer>
    </Wrapper>
  );
};

export default AidRqListWrapper;
