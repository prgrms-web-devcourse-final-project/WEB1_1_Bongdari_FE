import { ReviewListCss } from './indexCss';
import { useMyReview } from './logic/useMyReview';
import TitleWithPagenation from '@/features/personal-my-page-title-with-pagenation';
import ReviewBox from './_component/ReviewBox';
import ReviewReadModal from '@/features/review-read-modal';
import { reviewType } from '@/shared/types/person-profile/personProfile';

const ReviewList = () => {
  const {
    reviewData,
    totPage,
    currPage,
    setCurrPage,
    selectedReviewId,
    openReviewModal,
    handleReviewModal,
    handleCloseReviewModal
  } = useMyReview();

  if (!reviewData || reviewData.length === 0) {
    return (
      <ReviewListCss>
        <TitleWithPagenation title="내 리뷰 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
        <div className="noData">리뷰가 없습니다</div>
      </ReviewListCss>
    );
  } else {
    return (
      <>
        <ReviewListCss>
          <TitleWithPagenation title="내 리뷰 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
          <div className="listWrap">
            {reviewData.map((v: reviewType, i) => (
              <ReviewBox
                key={i}
                orgName={v.title}
                reviewText={v.content}
                createdDate={v.created_at}
                onClick={() => handleReviewModal(v)}
              />
            ))}
          </div>
        </ReviewListCss>
        {openReviewModal && (
          <ReviewReadModal
            handleCloseReviewModal={handleCloseReviewModal}
            reviewId={selectedReviewId}
            isCenterReview={true}
          />
        )}
      </>
    );
  }
};
export default ReviewList;
