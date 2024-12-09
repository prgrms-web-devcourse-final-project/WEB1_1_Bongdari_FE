import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { useQueryClient } from '@tanstack/react-query';

import MessageLabel from '@/components/label/MessageLabel';
import { Author, CustomPagination, List, ListItem, ListItemTitle, NoteSetTitle, StateBox, Wrapper } from './indexCss';
import { useMessageList, type MessageItem } from '@/store/queries/center-mypage/useMessage';
import { usePagination } from '@/shared/hooks/usePagination';
import MessageReadModal from '@/features/message-read-modal';

interface MessageListResponse {
  content: MessageItem[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}

const MessageSet = () => {
  const [openNoteModal, setNoteModal] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<number>(0);
  const { page, handlePageChange } = usePagination();
  const queryClient = useQueryClient();

  const { data: messages } = useMessageList(page);

  const handleItemClick = (message: MessageItem) => {
    setSelectedMessageId(message.id);
    setNoteModal(true);

    queryClient.setQueryData(['messageList', page], (old: MessageListResponse | undefined) => {
      if (!old) return old;

      return {
        ...old,
        content: old.content.map((item: MessageItem) => (item.id === message.id ? { ...item, is_read: true } : item))
      };
    });
  };

  const handleModalClose = () => {
    setNoteModal(false);
  };

  return (
    <>
      <Wrapper>
        <NoteSetTitle>쪽지리스트</NoteSetTitle>
        <List>
          {messages?.content?.map((message: MessageItem) => (
            <ListItem key={message.id} onClick={() => handleItemClick(message)}>
              <ListItemTitle $isRead={message.is_read}>{message.title}</ListItemTitle>
              <StateBox>
                {!message.is_read && <MessageLabel />}
                <Author>{message.sender_name}</Author>
              </StateBox>
            </ListItem>
          ))}
        </List>
        <Stack spacing={2} sx={{ margin: 'auto' }}>
          <CustomPagination page={page + 1} onChange={handlePageChange} count={messages?.totalPages} />
        </Stack>
      </Wrapper>
      {openNoteModal && <MessageReadModal handleModalClose={handleModalClose} noteId={selectedMessageId} />}
    </>
  );
};

export default MessageSet;
