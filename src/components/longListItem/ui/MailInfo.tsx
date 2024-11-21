import React from 'react';
import ChatInfoCss from './MailInfoCss';
import MessageLabel from '@/components/label/MessageLabel';

interface ChatInfoProps {
  isRead: boolean;
  mailWriter: string;
}

const ChatInfo: React.FC<ChatInfoProps> = ({ isRead, mailWriter }) => {
  return (
    <ChatInfoCss>
      {isRead ? '' : <MessageLabel />}
      <p className="mailWriter">{mailWriter}</p>
    </ChatInfoCss>
  );
};
export default ChatInfo;
