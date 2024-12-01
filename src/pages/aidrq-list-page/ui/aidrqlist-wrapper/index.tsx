import AidRqList from '@/features/aidrq-list-regular';
import { Wrapper, Observer } from './indexCss';
import { useInfiniteAidRq } from '@/shared/hooks/useInfiniteAidRq';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AidRqListWrapper = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteAidRq();

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      console.log('Fetching next page');
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Wrapper>
      <AidRqList></AidRqList>
      <Observer ref={ref}></Observer>
    </Wrapper>
  );
};

export default AidRqListWrapper;
