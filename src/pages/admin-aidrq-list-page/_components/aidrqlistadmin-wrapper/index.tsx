import { Wrapper } from './indexCss';
// import { useInfiniteAidRq } from '@/shared/hooks/useInfiniteAidRq';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
import AidRqListAdmin from '@/features/aidrq-list-admin';

const AidRqAdminListWrapper = () => {
  // const { data, fetchNextPage, hasNextPage } = useInfiniteAidRq();

  // const { ref, inView } = useInView();
  // useEffect(() => {
  //   if (inView && hasNextPage) {
  //     console.log('Fetching next page');
  //     fetchNextPage();
  //   }
  // }, [inView, hasNextPage, fetchNextPage]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <Wrapper>
      <AidRqListAdmin></AidRqListAdmin>
      {/* <Observer ref={ref}></Observer> */}
    </Wrapper>
  );
};

export default AidRqAdminListWrapper;
