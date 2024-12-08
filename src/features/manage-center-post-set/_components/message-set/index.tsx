import { useState } from 'react';
import Stack from '@mui/material/Stack';

import MessageLabel from '@/components/label/MessageLabel';
import { Author, CustomPagination, List, ListItem, ListItemTitle, NoteSetTitle, StateBox, Wrapper } from './indexCss';
import { useMessageList, type MessageItem } from '@/store/queries/center-mypage/useMessage';
import { usePagination } from '@/shared/hooks/usePagination';
import MessageReadModal from '@/features/message-read-modal';

const MessageSet = () => {
  const [openNoteModal, setNoteModal] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<number>(0);
  const { page, handlePageChange } = usePagination();

  const { data: messages, refetch } = useMessageList(page);

  console.log('메세지야 안녕1', messages);
  const handleItemClick = (message: MessageItem) => {
    setSelectedMessageId(message.id);
    setNoteModal(true);
  };

  console.log('메세지야 안녕2', messages);
  const handleModalClose = () => {
    setNoteModal(false);
    refetch();
  };

  console.log('메세지야 안녕3', messages);
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
