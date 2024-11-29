import { useEffect, useState } from 'react';
import SectionTitle from '../section-title';
import { ReviewListCss } from './indexCss';
import ReviewBox from './review-box/ReviewBox';
import { reviewType } from '@/shared/types/person-profile/personProfile';

const ReviewList = ({ user_id }: { user_id: string }) => {
  const [totPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const tmpdata: reviewType[] = [
    {
      id: 'id1',
      title:
        '너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요',
      createdTime: '2024.04.01'
    },
    {
      id: 'id1',
      title:
        '너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요',
      createdTime: '2024.04.01'
    },
    {
      id: 'id1',
      title:
        '너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요 너무 재밌었습니다 또가고 싶어요',
      createdTime: '2024.04.01'
    }
  ];

  useEffect(() => {
    // TODO: user_id로 관심기관 목록 조회
    // TODO: 데이터 가져온 후 totPage, currPage 설정해주기
    console.log('TODO: ', user_id, '의 관심기관 조회');
  });

  return (
    <ReviewListCss>
      <SectionTitle title="내 리뷰 목록" totPage={totPage} currPage={currPage} setCurrPage={setCurrPage} />
      <div className="listWrap">
        {tmpdata.map((v) => (
          <ReviewBox orgName={v.id} reviewText={v.title} createdDate={v.createdTime} />
        ))}
      </div>
    </ReviewListCss>
  );
};
export default ReviewList;
