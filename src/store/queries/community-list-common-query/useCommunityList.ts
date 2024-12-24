import axiosInstance from '@/api/apis';
import { communityListType } from '@/shared/types/community-type/CommuntiyTypes';
import { dataTypeWithPage, resType } from '@/shared/types/resType';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface UseCommunityListReturn {
  listData: communityListType[] | undefined;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
  isLoading: boolean;
  error: Error | null;
}

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

// 커스텀 훅
export const useCommunityList = ({ searchWord = '' }: { searchWord?: string }): UseCommunityListReturn => {
  const [currPage, setCurrPage] = useState<number>(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ['communityList', searchWord, currPage],
    queryFn: () => fetchCommunityList({ searchWord, page: currPage - 1 })
  });

  return {
    listData: data?.content?.flat(),
    totPage: data?.totalPages ?? 1,
    currPage,
    setCurrPage,
    isLoading,
    error: error as Error | null
  };
};
