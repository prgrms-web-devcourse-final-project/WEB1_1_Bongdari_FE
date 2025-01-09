import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';
import { communityListType } from '@/shared/types/community-type/CommuntiyTypes';
import { dataTypeWithPage, resType } from '@/shared/types/resType';

// API 호출 함수
const fetchCommunityList = async ({ searchWord = '', page = 0 }: { searchWord?: string; page?: number }) => {
  const trimSearchWord = searchWord?.trim();
  const endpoint = trimSearchWord
    ? `/api/community-boards/search?keyword=${trimSearchWord}&page=${page}`
    : `/api/community-boards?page=${page}`;

  const res: resType<dataTypeWithPage<communityListType[]>> = await axiosInstance.get(endpoint);

  if (res.code >= 200 && res.code < 300) {
    return res.data;
  }
  throw new Error(`API 에러: ${res.code}`);
};

export const useCommunityListQuery = ({
  searchWord = '',
  currPage = 0
}: {
  searchWord?: string;
  currPage?: number;
}) => {
  return useQuery({
    queryKey: ['communityList', searchWord, currPage],
    queryFn: () => fetchCommunityList({ searchWord, page: currPage - 1 })
  });
};
