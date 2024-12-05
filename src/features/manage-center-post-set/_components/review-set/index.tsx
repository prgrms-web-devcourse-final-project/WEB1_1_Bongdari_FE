import Stack from '@mui/material/Stack';

import Select from '@/components/select';
import {
  Author,
  CustomPagination,
  ItemTitle,
  ListItem,
  NoReview,
  ReviewList,
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
          {data?.reviews.map((review) => (
            <ListItem key={review.id}>
              <ItemTitle onClick={() => handleReviewModal(review)}>{review.title}</ItemTitle>
              <Author>{review.volunteer_nickname}</Author>
            </ListItem>
          ))}
          {(!data?.reviews || data.reviews.length === 0) && <NoReview>등록된 리뷰가 없습니다.</NoReview>}
        </ReviewList>
        <Stack spacing={2} sx={{ margin: 'auto' }}>
          <CustomPagination count={data?.pagination.totalPages || 1} page={displayPage} onChange={handlePageChange} />
        </Stack>
      </Wrapper>
      {openReviewModal && <ReviewReadModal handleReviewModal={handleReviewModal} review={selectedReview} />}
      {isLoading && <div>로딩중...</div>}
    </>
  );
};

export default ReviewSet;
