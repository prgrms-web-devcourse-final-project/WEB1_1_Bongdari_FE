import { useEffect, useState } from 'react';

// PMPGHalfLists의 쪽지 목록에 쓰이는 use
interface useMyMessageDataReturn {
  messageData: { content_id: string; title: string; isRead?: boolean; mailWriter?: string }[] | undefined;
}

export const useMyMessageData = (): useMyMessageDataReturn => {
  const [messageData, setMessageData] =
    useState<{ content_id: string; title: string; isRead?: boolean; mailWriter?: string }[]>();

  useEffect(() => {
    const fetchData = async () => {
      // const data = await fetchMyAid();
      // if (data) setAidData(data);
      setMessageData([
        // { content_id: '1', title: '제목입니다1', isRead: true, mailWriter: '서울 도서관' },
        // { content_id: '2', title: '제목입니다2', isRead: false, mailWriter: '서울 도서관' },
        // { content_id: '3', title: '제목입니다3', isRead: true, mailWriter: '서울 도서관' },
        // { content_id: '4', title: '제목입니다4', isRead: false, mailWriter: '서울 도서관' }
      ]);
    };
    fetchData();
  }, []);

  return {
    messageData
  };
};
