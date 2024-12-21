import { useEffect, useState } from 'react';
import { myMessageType, myVolunteerType } from '@/shared/types/person-profile/personProfile';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { fetchMyMessage, fetchMyVolunteer } from '@/store/queries/volunteer-mypage/useFetchMyData';

interface useHalfListProps {
  listType: 'myVolunteer' | 'myMessage';
}
interface useHalfListReturn {
  myData: myVolunteerType[] | myMessageType[] | undefined;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
  onClickMyMessage: (content_id: string) => void;
  msgOpenId: number;
  isMsgModalOpen: boolean;
  onCloseMsgModal: () => void;
}

export const useHalfList = ({ listType }: useHalfListProps): useHalfListReturn => {
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const [myData, setData] = useState<myVolunteerType[] | myMessageType[]>();
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const [isMsgModalOpen, setIsMsgModalOpen] = useState<boolean>(false);
  const [msgOpenId, setMsgOpenId] = useState<number>(0);

  const onClickMyMessage = (message_id: string) => {
    console.log(message_id, '메시지 띄우기');
    setMsgOpenId(Number(message_id));
    setIsMsgModalOpen(true);
  };

  const onCloseMsgModal = () => {
    const fetchData = async () => {
      const data = await fetchMyMessage(currPage);
      console.log('메시지 데이터', data?.content);
      if (data) setData(data.content);
    };
    setIsMsgModalOpen(false);
    fetchData();
  };

  // 페이지 변경시 다시 불러오기
  useEffect(() => {
    const fetchData = async () => {
      if (listType === 'myVolunteer') {
        const data = await fetchMyVolunteer(myLoginId ?? '', currPage);
        console.log('봉사 데이터', data?.content);
        if (data) setData(data.content);
      } else {
        const data = await fetchMyMessage(currPage);
        console.log('메시지 데이터', data?.content);
        if (data) setData(data.content);
      }
    };
    fetchData();
  }, [currPage]);

  useEffect(() => {
    const fetchData = async () => {
      if (listType === 'myVolunteer') {
        const data = await fetchMyVolunteer(myLoginId ?? '');
        console.log('봉사 데이터', data?.content);
        if (data && !myData) {
          setData(data.content);
          setTotPage(data.totalPages || 1);
        }
      } else {
        const data = await fetchMyMessage();
        console.log('메시지 데이터', data?.content);
        if (data && !myData) {
          setData(data.content);
          setTotPage(data.totalPages || 1);
        }
      }
    };
    fetchData();
  }, []);

  return {
    myData,
    totPage,
    currPage,
    setCurrPage,
    onClickMyMessage,
    msgOpenId,
    isMsgModalOpen,
    onCloseMsgModal
  };
};
