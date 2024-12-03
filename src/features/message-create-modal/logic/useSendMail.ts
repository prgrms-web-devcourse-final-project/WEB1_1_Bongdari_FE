import { useLoginStore } from '@/store/stores/login/loginStore';
import { useState } from 'react';

interface UseSendEmailProps {
  user_id: string;
  setIsModalOpen: (bool: boolean) => void;
}

interface UseSendEmailReturn {
  checkTitle: (txt: string) => void;
  checkContent: (txt: string) => void;
  checkSend: () => void;
  errMsg: string;
}

export const useSendMail = ({ user_id, setIsModalOpen }: UseSendEmailProps): UseSendEmailReturn => {
  const [mailTitle, setMailTitle] = useState<string>('');
  const [mailContent, setMailContent] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');
  const myLoginId = useLoginStore((state) => state.myLoginId);

  const checkErr = () => {
    if (mailTitle === '') setErrMsg('제목이 비어있습니다');
    else if (mailContent === '') setErrMsg('내용이 비어있습니다');
    else setErrMsg('');
  };
  const checkTitle = (txt: string) => {
    setMailTitle(txt);
    checkErr();
  };
  const checkContent = (txt: string) => {
    setMailContent(txt);
    checkErr();
  };

  const checkSend = () => {
    if (errMsg === '') sendMail(user_id, myLoginId, mailTitle, mailContent);
  };

  const sendMail = (user_id: string, myLoginId: string | null, mailTitle: string, mailContent: string) => {
    if (!myLoginId) console.error('Err: 로그인 상태가 아닙니다');
    console.log(myLoginId, '가 ', user_id, '에게...');
    console.log('title:', mailTitle, ' & content:', mailContent, '를 전송');

    // TODO: '메세지가 전송되었습니다'라고 하는 토스트msg 같은거 띄우면 좋을 듯
    setIsModalOpen(false);
  };

  return {
    checkTitle,
    checkContent,
    checkSend,
    errMsg
  };
};
