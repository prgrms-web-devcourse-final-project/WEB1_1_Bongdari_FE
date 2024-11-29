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
import ReviewReadModal from '../../../review-read-modal';

// 임시 옵션 설정
const dataOption = ['가', '나', '다'];

const ReviewSet = () => {
  const [, setSelectedOption] = useState('');
  const [openReviewModal, setOpenReviewModal] = useState(false);

  const handleSelectedOption = (selectOption: string) => {
    setSelectedOption(selectOption);
  };

  const handleReviewModal = () => {
    setOpenReviewModal(!openReviewModal);
    console.log('클릭');
  };

  return (
    <>
      <Wrapper>
        <TitleContainer>
          <ReviewSetTitle>내 기관 리뷰 보기</ReviewSetTitle>
          <Select text="활동 유형" data={dataOption} getSelectedOption={handleSelectedOption} />
        </TitleContainer>
        <ReviewList>
          <ListItem>
            <ItemTitle onClick={handleReviewModal}>서울도서관은 아주 유명한 도서관임</ItemTitle>
            <Author>글쓴이</Author>
          </ListItem>
          <ListItem>
            <ItemTitle onClick={handleReviewModal}>서울도서관은 아주 유명한 도서관임</ItemTitle>
            <Author>글쓴이</Author>
          </ListItem>
          <ListItem>
            <ItemTitle onClick={handleReviewModal}>서울도서관은 아주 유명한 도서관임</ItemTitle>
            <Author>글쓴이</Author>
          </ListItem>
          <ListItem>
            <ItemTitle onClick={handleReviewModal}>서울도서관은 아주 유명한 도서관임</ItemTitle>
            <Author>글쓴이</Author>
          </ListItem>
          <ListItem>
            <ItemTitle onClick={handleReviewModal}>서울도서관은 아주 유명한 도서관임</ItemTitle>
            <Author>글쓴이</Author>
          </ListItem>
          <ListItem>
            <ItemTitle onClick={handleReviewModal}>서울도서관은 아주 유명한 도서관임</ItemTitle>
            <Author>글쓴이</Author>
          </ListItem>
        </ReviewList>
        <Stack spacing={2} sx={{ margin: 'auto' }}>
          <CustomPagination count={5} />
        </Stack>
      </Wrapper>
      {openReviewModal && <ReviewReadModal handleReviewModal={handleReviewModal} />}
    </>
  );
};

export default ReviewSet;
