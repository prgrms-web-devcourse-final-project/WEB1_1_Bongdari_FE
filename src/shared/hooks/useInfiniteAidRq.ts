import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

interface AidRequestParams {
  page: number;
  keyword?: string;
  category?: string;
  region?: string | null;
  admitted?: null | boolean;
  sort?: string;
  status?: string;
}

const fetchAidRequests = async ({ page, keyword, category, region, admitted, sort, status }: AidRequestParams) => {
  const response = await axios.get('http://54.180.201.20:8080/api/recruit-boards/search?size=9', {
    params: {
      page,
      keyword,
      category,
      region,
      admitted,
      sort,
      status
    }
  });

  return {
    items: response,
    nextPage: page + 1,
    hasMore: !response.data.data.last
  };
};

export const useInfiniteAidRq = (
  keyword: string,
  category: string,
  region: string | null,
  admitted: null | boolean,
  sort: string,
  status: string
) => {
  const { data, fetchNextPage, hasNextPage, refetch, isLoading, isError, error } = useInfiniteQuery({
    queryKey: ['aidRequests'],
    queryFn: ({ pageParam = 1 }) =>
      fetchAidRequests({
        page: pageParam,
        keyword,
        category,
        region,
        admitted,
        sort,
        status
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => (lastPage.items.data.data.last ? undefined : lastPage.items.data.data.number + 1),
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
