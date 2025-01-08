import { communityListType } from '@/shared/types/community-type/CommuntiyTypes';
import { useCommunityListQuery } from '@/store/queries/community-list-common-query/useCommunityList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface useCommunityListReturn {
  listData: communityListType[] | undefined;
  totPage: number;
  currPage: number;
  isLoading: boolean;
  error: Error | null;
}

export const useCommunityList = (): useCommunityListReturn => {
  const [listData, setListData] = useState<communityListType[] | undefined>();
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const [searchWord, setSearchWord] = useState('');
  const [searchParams] = useSearchParams(); // url의 querystring이 변경되면 자동 업데이트됨

  const { data: rawData, isLoading, error } = useCommunityListQuery({ searchWord, currPage });

  // Update currPage and searchWord when searchParams changes
  useEffect(() => {
    setCurrPage(parseInt(searchParams.get('page') ?? '1'));
    setSearchWord(searchParams.get('search') || '');
  }, [searchParams]);

  // Update listData and totPage when rawData changes
  useEffect(() => {
    if (rawData) {
      setListData(rawData.content.flat());
      setTotPage(rawData.totalPages ?? 1);
    }
  }, [rawData]);

  return {
    listData,
    totPage,
    currPage,
    isLoading,
    error: error as Error | null
  };
};
