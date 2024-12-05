import Stack from '@mui/material/Stack';

import Select from '@/components/select';
import {
  Author,
  CustomPaginationCss,
  ItemTitle,
  ListItem,
  ReviewListCss,
  ReviewSetTitle,
  TitleContainer,
  Wrapper
} from './indexCss';
import { useState } from 'react';
import ReviewReadModal from '../../../review-read-modal';
import aidrqCategoryMapping from '@/shared/mapping/aidrq-category-mapping';
import { useGetCenterReviews, type Review } from '@/store/queries/center-mypage/useReview';
import { usePagination } from '@/shared/hooks/usePagination';

interface ReviewSetProps {
  centerId: string;
}

const categoryOptions = ['전체', ...Object.keys(aidrqCategoryMapping)];

const ReviewSet = ({ centerId }: ReviewSetProps) => {
  const { page, displayPage, handlePageChange, resetPage } = usePagination();
  const [category, setCategory] = useState('');
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const { data, isLoading } = useGetCenterReviews({
    centerId,
    page,
    size: 10,
    category: category ? aidrqCategoryMapping[category] : undefined
  });

  const handleSelectedOption = (selectOption: string) => {
    setCategory(selectOption === '전체' ? '' : selectOption);
    resetPage();
  };

  const handleReviewModal = (review?: Review) => {
    if (review) {
      setSelectedReview(review);
    }
    setOpenReviewModal(!openReviewModal);
  };

  return (
    <>
      <Wrapper>
        <TitleContainer>
          <ReviewSetTitle>내 기관 리뷰 보기</ReviewSetTitle>
          <Select text="활동 유형" data={categoryOptions} getSelectedOption={handleSelectedOption} />
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
      {openReviewModal && <ReviewReadModal handleReviewModal={handleReviewModal} review={selectedReview} />}
      {isLoading && <div>로딩중...</div>}
    </>
  );
};

export default ReviewSet;
