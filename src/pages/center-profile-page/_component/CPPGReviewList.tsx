import ReviewList from '@/features/manage-center-post-set/_components/review-set/ReviewList';
import { CPPGReviewListCss } from './CPPGReviewListCss';
import { useCenterReview } from './logic/useCenterReview';
import CustomPagination from '@/features/custom-pagnation';

const CPPGReviewList = () => {
  const { reviewData, totPage, currPage, setCurrPage } = useCenterReview();

  if (!reviewData || reviewData.length === 0) {
    // 해당 기관의 리뷰 데이터가 없을 경우
    return (
      <CPPGReviewListCss>
        <div className="noData">리뷰 데이터가 없습니다</div>
      </CPPGReviewListCss>
    );
  } else {
    return (
      <CPPGReviewListCss>
        <ReviewList data={reviewData} />
        <CustomPagination totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
      </CPPGReviewListCss>
    );
  }
};
export default CPPGReviewList;
