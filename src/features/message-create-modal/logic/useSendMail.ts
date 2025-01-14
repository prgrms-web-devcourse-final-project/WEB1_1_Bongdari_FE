import { usePostMessage } from '@/store/queries/message-create-common-query/usePostMessage';
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
  resMsg: string;
}

export const useSendMail = ({ user_id, setIsModalOpen }: UseSendEmailProps): UseSendEmailReturn => {
  const [mailTitle, setMailTitle] = useState<string>('');
  const [mailContent, setMailContent] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');
  const [resMsg, setResMsg] = useState<string>('쪽지가 성공적으로 전송되었습니다.');
  const loginType = useLoginStore((state) => state.loginType);

  // const { mutate: postMessage, error, isError } = usePostMessage();
  const { mutate: postMessage, isError } = usePostMessage();

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
      if (loginType === 'ROLE_VOLUNTEER') {
        postMessage({ from: 'volunteer', receiver_id: user_id, title: mailTitle, content: mailContent });
      } else if (loginType === 'ROLE_CENTER') {
        postMessage({ from: 'center', receiver_id: user_id, title: mailTitle, content: mailContent });
      }
    };

    postData();
    // if (error) console.log('eeeeeeeee', error.response.data.detail); // 응답의 메시지 사용하려면 error의 타입 정의 필요
    if (isError) setResMsg('쪽지 전송 중 오류가 발생했습니다.');

    setIsModalOpen(false);
  };

  return {
    checkTitle,
    checkContent,
    checkSend,
    errMsg,
    resMsg
  };
};
