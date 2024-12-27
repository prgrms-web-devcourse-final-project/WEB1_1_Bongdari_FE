import { useEffect, useState } from 'react';
import { myMessageType, myVolunteerType } from '@/shared/types/person-profile/personProfile';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { useMyMessage, useMyVolunteer } from '@/store/queries/volunteer-mypage/useFetchMyData';

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
  const { data: volunteerData } = useMyVolunteer(myLoginId ?? '', currPage);
  const { data: messageData } = useMyMessage(currPage);

  const onClickMyMessage = (message_id: string) => {
    console.log(message_id, '메시지 띄우기');
    setMsgOpenId(Number(message_id));
    setIsMsgModalOpen(true);
  };

  // 왜 메시지 모달을 닫을 때 메시지 데이터를 set하지?
  const onCloseMsgModal = () => {
    if (messageData) setData(messageData.content);
    setIsMsgModalOpen(false);
  };

  // 페이지 변경시 다시 불러오기
  useEffect(() => {
    if (listType === 'myVolunteer') {
      // `volunteerData`가 업데이트되었을 때 데이터를 설정
      if (volunteerData) {
        setData(volunteerData.content); // 새로운 데이터 설정
        setTotPage(volunteerData.totalPages || 1); // 전체 페이지 수 업데이트
      }
    } else {
      // `messageData`가 업데이트되었을 때 데이터를 설정
      if (messageData) {
        setData(messageData.content); // 새로운 데이터 설정
        setTotPage(messageData.totalPages || 1); // 전체 페이지 수 업데이트
      }
    }
  }, [currPage, listType, volunteerData, messageData]); // currPage와 관련 데이터를 의존성 배열에 추가

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
