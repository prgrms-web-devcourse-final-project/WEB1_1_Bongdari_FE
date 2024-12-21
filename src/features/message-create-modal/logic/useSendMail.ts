import { postMessage } from '@/store/queries/message-create-common-query/usePostMessage';
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
  // const myLoginId = useLoginStore((state) => state.myLoginId);
  const loginType = useLoginStore((state) => state.loginType);

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
    console.log('check send message', user_id, mailTitle, mailContent);
    if (errMsg === '') sendMail(user_id, mailTitle, mailContent);
  };

  const sendMail = (user_id: string, mailTitle: string, mailContent: string) => {
    const postData = async () => {
      if (loginType === 'ROLE_VOLUNTEER') postMessage('volunteer', user_id, mailTitle, mailContent);
      else if (loginType === 'ROLE_CENTER') postMessage('center', user_id, mailTitle, mailContent);
    };
    if (!loginType) console.error('Err: 로그인 상태가 아닙니다');
    else {
      postData();
    }

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
