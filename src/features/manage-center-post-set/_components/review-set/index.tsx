import Stack from '@mui/material/Stack';
import Select from '@/components/select';
import {
  Author,
  CustomPaginationCss,
  ItemTitle,
  ListItem,
  // NoReview,
  ReviewListCss,
  ReviewSetTitle,
  TitleContainer,
  Wrapper
} from './indexCss';
import { useState } from 'react';
import aidrqCategoryMapping from '@/shared/mapping/aidrq-category-mapping';
import { useGetCenterReviews } from '@/store/queries/center-mypage/useReview';
import { usePagination } from '@/shared/hooks/usePagination';
import ReviewReadModal from '@/features/review-read-modal';
import { Review } from '@/shared/types/review/reviewType';

interface ReviewSetProps {
  centerId: string;
}

const categoryOptions = ['전체', ...Object.keys(aidrqCategoryMapping)];

const ReviewSet = ({ centerId }: ReviewSetProps) => {
  const { page, handlePageChange } = usePagination();
  const [category, setCategory] = useState('');
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number>(0);

  const { data: reviews } = useGetCenterReviews(centerId, page, category ? aidrqCategoryMapping[category] : undefined);
  const hasReviews = reviews?.content && reviews.content.length > 0;

  const handleSelectedOption = (selectOption: string) => {
    setCategory(selectOption === '전체' ? '' : selectOption);
  };

  const handleReviewModal = (review: Review) => {
    setSelectedReviewId(review.id);
    setOpenReviewModal(true);
    // console.log('States after update:', { selectedReviewId: review.id, openReviewModal: true });
  };

  const handleCloseReviewModal = () => {
    setOpenReviewModal(false);
  };

  return (
    <>
      <Wrapper>
        <TitleContainer>
          <ReviewSetTitle>내 기관 리뷰 보기</ReviewSetTitle>
          <Select text="활동 유형" data={categoryOptions} getSelectedOption={handleSelectedOption} />
        </TitleContainer>
        <ReviewListCss>
          {!hasReviews ? (
            <div className="noData">등록된 리뷰가 없습니다.</div>
          ) : (
            reviews?.content.map((review: Review) => (
              <ListItem key={review.id} onClick={() => handleReviewModal(review)}>
                <ItemTitle>{review.title}</ItemTitle>
                <Author>{review.volunteer_nickname}</Author>
              </ListItem>
            ))
          )}
        </ReviewListCss>
        {hasReviews && (
          <Stack spacing={2} sx={{ margin: 'auto' }}>
            <CustomPaginationCss count={reviews?.totalPages || 1} page={page + 1} onChange={handlePageChange} />
          </Stack>
        )}
      </Wrapper>
      {openReviewModal && (
        <ReviewReadModal handleCloseReviewModal={handleCloseReviewModal} reviewId={selectedReviewId} />
      )}
    </>
  );
};

export default ReviewSet;
