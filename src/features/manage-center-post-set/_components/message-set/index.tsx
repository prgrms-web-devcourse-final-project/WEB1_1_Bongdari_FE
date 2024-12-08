import { useState } from 'react';
import Stack from '@mui/material/Stack';

import MessageLabel from '@/components/label/MessageLabel';
import { Author, CustomPagination, List, ListItem, ListItemTitle, NoteSetTitle, StateBox, Wrapper } from './indexCss';
import MessageReadModal from '../../../message-read-modal';
import { useMessageList, type MessageItem } from '@/store/queries/center-mypage/useMessage';
import { usePagination } from '@/shared/hooks/usePagination';

const MessageSet = () => {
  const [openNoteModal, setNoteModal] = useState(false);
  const { page, handlePageChange } = usePagination();

  const { data: messages } = useMessageList(page);

  console.log('메세지야 안녕!!!!!!!!!!!!!!', messages);

  const handleItemClick = () => {
    setNoteModal(true);
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
            <ListItem key={message.id} onClick={() => handleItemClick()}>
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
      {openNoteModal && <MessageReadModal handleModalClose={handleModalClose} />}
    </>
  );
};

export default MessageSet;
