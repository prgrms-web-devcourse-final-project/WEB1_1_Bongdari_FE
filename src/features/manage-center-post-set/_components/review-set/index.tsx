import Stack from '@mui/material/Stack';
import Select from '@/components/select';
import {
  Author,
  CustomPaginationCss,
  ItemTitle,
  ListItem,
  NoReview,
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
  const { page, handlePageChange, resetPage } = usePagination();
  const [category, setCategory] = useState('');
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(0);

  const { data: reviews, isLoading } = useGetCenterReviews(
    centerId,
    page,
    category ? aidrqCategoryMapping[category] : undefined
  );

  console.log('기고나리뷰', reviews);

  const handleSelectedOption = (selectOption: string) => {
    setCategory(selectOption === '전체' ? '' : selectOption);
    resetPage();
  };

  const handleReviewModal = (review?: Review) => {
    if (review) {
      setSelectedReviewId(review.id);
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
        <ReviewListCss>
          {reviews?.content.map((review: Review) => (
            <ListItem key={review.id}>
              <ItemTitle onClick={() => handleReviewModal(review)}>{review.title}</ItemTitle>
              <Author>{review.volunteer_nickname}</Author>
            </ListItem>
          ))}
          {(!reviews || reviews.length === 0) && <NoReview>등록된 리뷰가 없습니다.</NoReview>}
        </ReviewListCss>
        <Stack spacing={2} sx={{ margin: 'auto' }}>
          <CustomPaginationCss count={5} page={page + 1} onChange={handlePageChange} />
        </Stack>
      </Wrapper>
      {openReviewModal && <ReviewReadModal handleReviewModal={handleReviewModal} reviewId={selectedReviewId} />}
      {isLoading && <div>로딩중...</div>}
    </>
  );
};

export default ReviewSet;
