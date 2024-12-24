// import { communityListType } from '@/shared/types/community-type/CommuntiyTypes';
// import { fetchCommunityList } from '@/store/queries/community-list-common-query/useCommunityList';
// import { useEffect, useState } from 'react';

// interface useCommunityListReturn {
//   listData: communityListType[] | undefined;
//   totPage: number;
//   currPage: number;
//   setCurrPage: (page: number) => void;
// }

// export const useCommunityList = ({ searchWord }: { searchWord: string }): useCommunityListReturn => {
//   const [listData, setListData] = useState<communityListType[] | undefined>();
//   const [totPage, setTotPage] = useState<number>(1);
//   const [currPage, setCurrPage] = useState<number>(1);

//   // 검색 또는 page 넘김 시 데이터 fetch
//   useEffect(() => {
//     console.log('searching', searchWord);
//     const fetchData = async () => {
//       const data = await fetchCommunityList(searchWord, currPage - 1);
//       if (data) {
//         // setListData(data.content as communityListType[]); // data.content를 communityListType[]로 지정
//         setListData(data.content.flat() as communityListType[]);
//       }
//     };
//     fetchData();
//   }, [currPage, searchWord]);

//   // 첫 데이터 불러오기
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchCommunityList(searchWord);
//       if (data && !listData) {
//         // setListData(data.content as communityListType[]); // data.content를 communityListType[]로 지정
//         setListData(data.content.flat() as communityListType[]);
//         setTotPage(data.totalPages);
//       }
//     };
//     fetchData();
//   }, []);

//   return { listData, totPage, currPage, setCurrPage };
// };
