import { useState } from 'react';
import SectionTitle from '../PMPG-section-title';
import { ReviewListCss } from './indexCss';
import ReviewBox from './review-box/ReviewBox';

const ReviewList = ({ data }: { data: string[] }) => {
  const [totPage] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(1);
  return (
    <ReviewListCss>
      <SectionTitle title="내 리뷰 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
      <div className="listWrap">
        {data.map((v) => (
          <ReviewBox
            orgName={v}
            reviewText="너무 재밌었습니다 또가고 싶어요 홍홍 너무 재밌었습니다 또가고 싶어요 홍홍 너무 재밌었습니다 또가고 싶어요 홍홍 너무 재밌었습니다 또가고 싶어요 홍홍 너무 재밌었습니다 또가고 싶어요 홍홍 너무 재밌었습니다 또가고 싶어요 홍홍 너무 재밌었습니다 또가고 싶어요 홍홍"
            createdDate="2024.11.25"
          />
        ))}
      </div>
    </ReviewListCss>
  );
};
export default ReviewList;
