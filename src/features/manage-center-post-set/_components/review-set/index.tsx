import Stack from '@mui/material/Stack';

import Select from '@/components/select';
import {
  Author,
  CustomPagination,
  ItemTitle,
  ListItem,
  ReviewList,
  ReviewSetTitle,
  TitleContainer,
  Wrapper
} from './indexCss';
import { useState } from 'react';

// 임시 옵션 설정
const dataOption = ['가', '나', '다'];

const ReviewSet = () => {
  const [, setSelectedOption] = useState('');

  const handleSelectedOption = (selectOption: string) => {
    setSelectedOption(selectOption);
  };

  return (
    <Wrapper>
      <TitleContainer>
        <ReviewSetTitle>내 기관 리뷰 보기</ReviewSetTitle>
        <Select text="활동 유형" data={dataOption} getSelectedOption={handleSelectedOption} />
      </TitleContainer>
      <ReviewList>
        <ListItem>
          <ItemTitle>서울도서관은 아주 유명한 도서관임</ItemTitle>
          <Author>글쓴이</Author>
        </ListItem>
        <ListItem>
          <ItemTitle>서울도서관은 아주 유명한 도서관임</ItemTitle>
          <Author>글쓴이</Author>
        </ListItem>
        <ListItem>
          <ItemTitle>서울도서관은 아주 유명한 도서관임</ItemTitle>
          <Author>글쓴이</Author>
        </ListItem>
        <ListItem>
          <ItemTitle>서울도서관은 아주 유명한 도서관임</ItemTitle>
          <Author>글쓴이</Author>
        </ListItem>
        <ListItem>
          <ItemTitle>서울도서관은 아주 유명한 도서관임</ItemTitle>
          <Author>글쓴이</Author>
        </ListItem>
        <ListItem>
          <ItemTitle>서울도서관은 아주 유명한 도서관임</ItemTitle>
          <Author>글쓴이</Author>
        </ListItem>
      </ReviewList>
      <Stack spacing={2} sx={{ margin: 'auto' }}>
        <CustomPagination count={5} />
      </Stack>
    </Wrapper>
  );
};

export default ReviewSet;
