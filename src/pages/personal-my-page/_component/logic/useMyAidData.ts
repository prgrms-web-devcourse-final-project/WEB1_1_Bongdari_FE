import { useEffect, useState } from 'react';

// PMPGHalfLists의 봉사 목록에 쓰이는 use
interface useMyAidDataReturn {
  aidData: { content_id: string; title: string; isRead?: boolean; mailWriter?: string }[] | undefined;
}

export const useMyAidData = (): useMyAidDataReturn => {
  const [aidData, setAidData] =
    useState<{ content_id: string; title: string; isRead?: boolean; mailWriter?: string }[]>();

  useEffect(() => {
    const fetchData = async () => {
      // const data = await fetchMyAid();
      // if (data) setAidData(data);
      setAidData([
        //   { content_id: '1', title: '제목입니다1' },
        //   { content_id: '2', title: '제목입니다2' },
        //   { content_id: '3', title: '제목입니다3' },
        //   { content_id: '4', title: '제목입니다4' }
      ]);
    };
    fetchData();
  }, []);

  return {
    aidData
  };
};
