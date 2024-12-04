import { ReviewListCss } from './indexCss';
import { useMyReview } from './logic/useMyReview';
import TitleWithPagenation from '@/features/personal-my-page-title-with-pagenation';
import ReviewBox from './_component/ReviewBox';

const ReviewList = () => {
  const { reviewData, totPage, currPage, setCurrPage } = useMyReview();

  if (!reviewData || reviewData.length === 0) {
    return (
      <ReviewListCss>
        <TitleWithPagenation title="내 리뷰 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
        <div className="noData">리뷰가 없습니다</div>
      </ReviewListCss>
    );
  } else {
    return (
      <ReviewListCss>
        <TitleWithPagenation title="내 리뷰 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
        <div className="listWrap">
          {reviewData.map((v, i) => (
            <ReviewBox key={i} orgName={v.id} reviewText={v.title} createdDate={v.createdTime} />
          ))}
        </div>
      </ReviewListCss>
    );
  }
};
export default ReviewList;
