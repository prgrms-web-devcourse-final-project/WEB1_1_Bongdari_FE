import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import MessageLabel from '@/components/label/MessageLabel';
import { Author, CustomPagination, List, ListItem, ListItemTitle, NoteSetTitle, StateBox, Wrapper } from './indexCss';
import { useMessageList, type MessageItem } from '@/store/queries/center-mypage/useMessage';
import { usePagination } from '@/shared/hooks/usePagination';
import MessageReadModal from '@/features/message-read-modal';

const MessageSet = () => {
  const [openNoteModal, setNoteModal] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<number>(0); // 모달에 id 전달해주기 위한 상태
  const { page, handlePageChange } = usePagination();
  const [readMessages, setReadMessages] = useState<number[]>([]);

  const { data: messages } = useMessageList(page);

  console.log('메세지야 안녕!!!!!!!!!!!!!!', messages);

  // 컴포넌트 마운트되면 로컬스토리지에서 읽은 쪽지 가져옴
  useEffect(() => {
    const readItems = localStorage.getItem('readMessages');
    if (readItems) {
      setReadMessages(JSON.parse(readItems));
    }
  }, []);

  const handleItemClick = (message: MessageItem) => {
    // 메세지 아이템 클릭하면 로컬스토리지에 저장 (임시)
    const newReadMessages = [...readMessages, message.id];
    setReadMessages(newReadMessages);
    localStorage.setItem('readMessages', JSON.stringify(newReadMessages));

    setSelectedMessageId(message.id);
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
          {messages?.content?.map((message: MessageItem) => {
            const isRead = message.is_read || readMessages.includes(message.id);

            return (
              <ListItem key={message.id} onClick={() => handleItemClick(message)}>
                <ListItemTitle $isRead={message.is_read}>{message.title}</ListItemTitle>
                <StateBox>
                  {!isRead && <MessageLabel />}
                  <Author>{message.sender_name}</Author>
                </StateBox>
              </ListItem>
            );
          })}
        </List>
        <Stack spacing={2} sx={{ margin: 'auto' }}>
          <CustomPagination page={page + 1} onChange={handlePageChange} count={messages?.totalPages} />
        </Stack>
      </Wrapper>
      {openNoteModal && <MessageReadModal handleModalClose={handleModalClose} noteId={selectedMessageId} />}
    </>
  );
};

/*
const MessageSet = () => {
  const [openNoteModal, setNoteModal] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<number>(0); // 모달에 id 전달해주기 위한 상태
  const { page, handlePageChange } = usePagination();
  const [readMessages, setReadMessages] = useState<number[]>([]);

  const { data: messages } = useMessageList(page);

  console.log('메세지야 안녕!!!!!!!!!!!!!!', messages);

  // 컴포넌트 마운트되면 로컬스토리지에서 읽은 쪽지 가져옴
  useEffect(() => {
    const readItems = localStorage.getItem('readMessages');
    if (readItems) {
      setReadMessages(JSON.parse(readItems));
    }
  }, []);

  const handleItemClick = (message: MessageItem) => {
    // 메세지 아이템 클릭하면 로컬스토리지에 저장 (임시)
    const newReadMessages = [...readMessages, message.id];
    setReadMessages(newReadMessages);
    localStorage.setItem('readMessages', JSON.stringify(newReadMessages));

    setSelectedMessageId(message.id);
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
          {messages?.content?.map((message: MessageItem) => {
            const isRead = message.is_read || readMessages.includes(message.id);

            return (
              <ListItem key={message.id} onClick={() => handleItemClick(message)}>
                <ListItemTitle $isRead={message.is_read}>{message.title}</ListItemTitle>
                <StateBox>
                  {!isRead && <MessageLabel />}
                  <Author>{message.sender_name}</Author>
                </StateBox>
              </ListItem>
            );
          })}
        </List>
        <Stack spacing={2} sx={{ margin: 'auto' }}>
          <CustomPagination page={page + 1} onChange={handlePageChange} count={messages?.totalPages} />
        </Stack>
      </Wrapper>
      {openNoteModal && <MessageReadModal handleModalClose={handleModalClose} noteId={selectedMessageId} />}
    </>
  );
};
*/

// const MessageSet = () => {
//   const [openNoteModal, setNoteModal] = useState(false);
//   const [selectedMessageId, setSelectedMessageId] = useState<number>(0);
//   const { page, handlePageChange } = usePagination();

//   const { data: messages } = useMessageList(page);

//   console.log('메세지야 안녕1', messages);
//   const handleItemClick = (message: MessageItem) => {
//     setSelectedMessageId(message.id);
//     setNoteModal(true);
//   };

//   console.log('메세지야 안녕2', messages);
//   const handleModalClose = () => {
//     setNoteModal(false);
//   };

//   console.log('메세지야 안녕3', messages);
//   return (
//     <>
//       <Wrapper>
//         <NoteSetTitle>쪽지리스트</NoteSetTitle>
//         <List>
//           {messages?.content?.map((message: MessageItem) => (
//             <ListItem key={message.id} onClick={() => handleItemClick(message)}>
//               <ListItemTitle $isRead={message.is_read}>{message.title}</ListItemTitle>
//               <StateBox>
//                 {!message.is_read && <MessageLabel />}
//                 <Author>{message.sender_name}</Author>
//               </StateBox>
//             </ListItem>
//           ))}
//         </List>
//         <Stack spacing={2} sx={{ margin: 'auto' }}>
//           <CustomPagination page={page + 1} onChange={handlePageChange} count={messages?.totalPages} />
//         </Stack>
//       </Wrapper>
//       {openNoteModal && <MessageReadModal handleModalClose={handleModalClose} noteId={selectedMessageId} />}
//     </>
//   );
// };

// const MessageSet = () => {
//   const [openNoteModal, setNoteModal] = useState(false);
//   const [selectedMessageId, setSelectedMessageId] = useState<number>(0);
//   const { page, handlePageChange } = usePagination();

//   const queryClient = useQueryClient();
//   const { data: messages } = useMessageList(page);

//   console.log('1. 메시지 리스트 초기 데이터:', messages);

//   const handleItemClick = (message: MessageItem) => {
//     console.log('2. 클릭된 메시지:', message);
//     setSelectedMessageId(message.id);
//     setNoteModal(true);
//   };

//   const handleModalClose = () => {
//     console.log('3. 모달 닫힘');
//     setNoteModal(false);
//     queryClient.invalidateQueries(['messageList']);
//     console.log('4. 메시지 리스트 갱신 요청됨');
//   };

//   console.log('5. 현재 메시지 리스트 데이터:', messages);

//   return (
//     <>
//       <Wrapper>
//         <NoteSetTitle>쪽지리스트</NoteSetTitle>
//         <List>
//           {messages?.content?.map((message: MessageItem) => (
//             <ListItem key={message.id} onClick={() => handleItemClick(message)}>
//               <ListItemTitle $isRead={message.is_read}>{message.title}</ListItemTitle>
//               <StateBox>
//                 {!message.is_read && <MessageLabel />}
//                 <Author>{message.sender_name}</Author>
//               </StateBox>
//             </ListItem>
//           ))}
//         </List>
//         <Stack spacing={2} sx={{ margin: 'auto' }}>
//           <CustomPagination page={page + 1} onChange={handlePageChange} count={messages?.totalPages} />
//         </Stack>
//       </Wrapper>
//       {openNoteModal && <MessageReadModal handleModalClose={handleModalClose} noteId={selectedMessageId} />}
//     </>
//   );
// };

export default MessageSet;
