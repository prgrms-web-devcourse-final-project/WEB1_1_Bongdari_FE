import Stack from '@mui/material/Stack';

import MessageLabel from '@/components/label/MessageLabel';
import { Author, CustomPagination, List, ListItem, ListItemTitle, NoteSetTitle, StateBox, Wrapper } from './indexCss';

interface NoteSetProps {
  readStates: boolean[];
  setReadStates: (state: boolean[]) => void;
}

const NoteSet: React.FC<NoteSetProps> = ({ readStates, setReadStates }) => {
  // TODO: 모달 여는 이벤트 추가
  const handleItemClick = (index: number) => {
    const updatedStates = [...readStates];
    updatedStates[index] = true;
    setReadStates(updatedStates);
  };

  return (
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
  );
};

export default NoteSet;
