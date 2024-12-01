import { useState } from 'react';
import Stack from '@mui/material/Stack';

import MessageLabel from '@/components/label/MessageLabel';
import { Author, CustomPagination, List, ListItem, ListItemTitle, NoteSetTitle, StateBox, Wrapper } from './indexCss';
import MessageReadModal from '../../../message-read-modal';

interface MessageSetProps {
  readStates: boolean[];
  setReadStates: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const MessageSet: React.FC<MessageSetProps> = ({ readStates, setReadStates }) => {
  const [openNoteModal, setNoteModal] = useState(false);
  const [, setSelectedNoteIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    // 읽음 상태 업데이트
    setReadStates((prevStates) => prevStates.map((state, idx) => (idx === index ? true : state)));
    setSelectedNoteIndex(index);
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
          {readStates.map((isRead, index) => (
            <ListItem key={index} onClick={() => handleItemClick(index)}>
              <ListItemTitle $isRead={isRead}>조치 완료했습니다.</ListItemTitle>
              <StateBox>
                {!isRead && <MessageLabel />}
                <Author>글쓴이</Author>
              </StateBox>
            </ListItem>
          ))}
        </List>
        <Stack spacing={2} sx={{ margin: 'auto' }}>
          <CustomPagination count={5} />
        </Stack>
      </Wrapper>
      {openNoteModal && <MessageReadModal handleModalClose={handleModalClose} />}
    </>
  );
};

export default MessageSet;
