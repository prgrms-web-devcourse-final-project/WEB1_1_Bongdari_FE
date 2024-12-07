import { communityListType } from '@/shared/types/community-type/CommuntiyTypes';
import { useEffect, useState } from 'react';
import { fetchCommunityList } from './fetchCommunityList';

interface useCommunityListReturn {
  listData: communityListType[] | undefined;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
}

export const useCommunityList = ({ searchWord }: { searchWord: string }): useCommunityListReturn => {
  const [listData, setListData] = useState<communityListType[]>();
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);

  // 검색 또는 page 넘김 시 데이터 fetch
  useEffect(() => {
    console.log('searching', searchWord);
    const fetchData = async () => {
      const data = await fetchCommunityList(searchWord, currPage - 1);
      if (data) {
        setListData(data.data.content);
        // console.log('listData', listData);
      }
    };
    fetchData();
  }, [currPage, searchWord]);

  // 첫 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCommunityList(searchWord);
      if (data) {
        setListData(data.data.content);
        setTotPage(data.data.totalPages);
      } else
        setListData([
          {
            id: 1,
            title: '손모아 사이트 어떤가요?',
            writer_nickname: 'jooyoug',
            created_at: '2024.11.18'
          },
          {
            id: 2,
            title: '손모아 사이트 어떤가요?',
            writer_nickname: 'jooyoug',
            created_at: '2024.11.18'
          },
          {
            id: 3,
            title: '손모아 사이트 어떤가요?',
            writer_nickname: 'jooyoug',
            created_at: '2024.11.18'
          },
          {
            id: 4,
            title: '손모아 사이트 어떤가요?',
            writer_nickname: 'jooyoug',
            created_at: '2024.11.18'
          },
          {
            id: 5,
            title: '손모아 사이트 어떤가요?',
            writer_nickname: 'jooyoug',
            created_at: '2024.11.18'
          },
          {
            id: 6,
            title: '손모아 사이트 어떤가요?',
            writer_nickname: 'jooyoug',
            created_at: '2024.11.18'
          },
          {
            id: 7,
            title: '손모아 사이트 어떤가요?',
            writer_nickname: 'jooyoug',
            created_at: '2024.11.18'
          },
          {
            id: 8,
            title: '손모아 사이트 어떤가요?',
            writer_nickname: 'jooyoug',
            created_at: '2024.11.18'
          },
          {
            id: 9,
            title: '손모아 사이트 어떤가요?',
            writer_nickname: 'jooyoug',
            created_at: '2024.11.18'
          },
          {
            id: 10,
            title: '손모아 사이트 어떤가요?',
            writer_nickname: 'jooyoug',
            created_at: '2024.11.18'
          }
        ]);
    };
    fetchData();
  }, []);

  return { listData, totPage, currPage, setCurrPage };
};
