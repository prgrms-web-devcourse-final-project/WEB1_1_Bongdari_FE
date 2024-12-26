import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewType } from '@/shared/types/person-profile/personProfile';
import { useGetCenterReviews } from '@/store/queries/center-mypage/useReview';

interface useCenterReviewReturn {
  reviewData: reviewType[] | undefined;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
}

export const useCenterReview = (): useCenterReviewReturn => {
  const { center_id } = useParams();
  const [reviewData, setReviewData] = useState<reviewType[]>();
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const { data } = useGetCenterReviews(center_id ?? '', currPage);

  // 페이지 변경시 데이터 불러오기
  useEffect(() => {
    // url에 center_id가 있을 떄만 데이터 fetch
    if (center_id && data) setReviewData(data.content);
    setTotPage(data?.length || 1);
  }, [data]);

  return { reviewData, totPage, currPage, setCurrPage };
};
