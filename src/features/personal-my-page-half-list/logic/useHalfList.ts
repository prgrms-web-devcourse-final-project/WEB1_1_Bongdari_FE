import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { myMessageType, myVolunteerType } from '@/shared/types/person-profile/personProfile';
import { fetchMyMessage, fetchMyVolunteer } from '@/pages/personal-my-page/_component/logic/fetchMyData';
import { useLoginStore } from '@/store/stores/login/loginStore';

interface useHalfListProps {
  listType: 'myVolunteer' | 'myMessage';
}
interface useHalfListReturn {
  data: myVolunteerType[] | myMessageType[] | undefined;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
  onClickMyVolunteer: (content_id: string) => void;
  onClickMyMessage: (content_id: string) => void;
  msgOpenId: number;
  isMsgModalOpen: boolean;
  setIsMsgModalOpen: (bool: boolean) => void;
}

export const useHalfList = ({ listType }: useHalfListProps): useHalfListReturn => {
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const [data, setData] = useState<myVolunteerType[] | myMessageType[]>();
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const navigate = useNavigate();
  const [isMsgModalOpen, setIsMsgModalOpen] = useState<boolean>(false);
  const [msgOpenId, setMsgOpenId] = useState<number>(0);

  const onClickMyVolunteer = (content_id: string) => {
    navigate(`/aidrqdetail/${content_id}`);
  };

  const onClickMyMessage = (message_id: string) => {
    console.log(message_id, '메시지 띄우기');
    setMsgOpenId(Number(message_id));
    setIsMsgModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (listType === 'myVolunteer') {
        const data = await fetchMyVolunteer(myLoginId ?? '');
        console.log('봉사 데이터', data?.content);
        if (data) {
          setData(data.content);
          setTotPage(data.totalPages);
        }
      } else {
        const data = await fetchMyMessage();
        console.log('메시지 데이터', data?.content);
        if (data) {
          setData(data.content);
          setTotPage(data.totalPages);
        }
        setData([
          {
            id: 1,
            title: '안녕하세요',
            sender_id: '111',
            sender_name: 'jooyoung',
            is_read: false
          },
          {
            id: 1,
            title: '안녕하세요',
            sender_id: '111',
            sender_name: 'jooyoung',
            is_read: false
          },
          {
            id: 1,
            title: '안녕하세요',
            sender_id: '111',
            sender_name: 'jooyoung',
            is_read: false
          },
          {
            id: 1,
            title: '안녕하세요',
            sender_id: '111',
            sender_name: 'jooyoung',
            is_read: false
          },
          {
            id: 1,
            title: '안녕하세요',
            sender_id: '111',
            sender_name: 'jooyoung',
            is_read: false
          },
          {
            id: 1,
            title: '안녕하세요',
            sender_id: '111',
            sender_name: 'jooyoung',
            is_read: false
          }
        ]);
        setTotPage(2);
      }
    };
    fetchData();
  }, []);

  return {
    data,
    totPage,
    currPage,
    setCurrPage,
    onClickMyVolunteer,
    onClickMyMessage,
    msgOpenId,
    isMsgModalOpen,
    setIsMsgModalOpen
  };
};
