import { useInfiniteQuery } from '@tanstack/react-query';
import useSearchStore from '@/store/stores/search/searchStore';
import axios from 'axios';

interface AidRequestParams {
  page: number;
  keyword?: string;
  type?: string;
  region?: string;
  admitted?: string;
  sort?: string;
  status?: string;
}

const fetchAidRequests = async ({ page, keyword, type, region, admitted, sort, status }: AidRequestParams) => {
  const response = await axios.get('/api/recurit-boards/search', {
    params: {
      page,
      keyword,
      type,
      region,
      admitted,
      sort,
      status
    }
  });

  return {
    items: response,
    nextPage: page + 1,
    hasMore: response.data.hasMore
  };
};

export const useInfiniteAidRq = () => {
  const { keyword, type, region, admitted, sort, status } = useSearchStore();

  const { data, fetchNextPage, hasNextPage, refetch, isLoading, isError, error } = useInfiniteQuery({
    queryKey: ['aidRequests', keyword, type, region, admitted, sort, status],
    queryFn: ({ pageParam = 1 }) =>
      fetchAidRequests({
        page: pageParam,
        keyword,
        type,
        region,
        admitted,
        sort,
        status
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.nextPage : undefined),
    enabled: false, // 자동 실행 방지
    staleTime: 1000 * 60 * 5, // 5분간 캐시 유지
    refetchOnWindowFocus: false // 윈도우 포커스시 자동 refetch 방지
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
    searchAidRequests: refetch
  };
};
