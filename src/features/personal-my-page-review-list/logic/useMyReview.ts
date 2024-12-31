import { useEffect, useState } from 'react';
import { reviewType } from '@/shared/types/person-profile/personProfile';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { useMyReviewQuery } from '@/store/queries/volunteer-mypage/useFetchMyData';

// ReviewList에 쓰이는 use
interface useMyReviewReturn {
  reviewData: reviewType[] | undefined;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
}

export const useMyReview = (): useMyReviewReturn => {
  const [reviewData, setReviewData] = useState<reviewType[]>();
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const { data } = useMyReviewQuery(myLoginId ?? '', currPage);

  // 페이지 변경시 데이터 불러오기
  useEffect(() => {
    // 로그인 상태가 아니라면 불러오지 않기
    if (myLoginId && data) setReviewData(data.content);
  }, [currPage, data, myLoginId]);

  // 데이터 fetch 및 페이지 수 계산
  useEffect(() => {
    // 로그인 상태가 아니라면 불러오지 않기
    if (myLoginId && data) setReviewData(data.content);

    // 전체 페이지 수 계산
    const calcPage = () => {
      if (reviewData) {
        setTotPage(Math.ceil(reviewData.length / 5) || 1);
      }
    };

    calcPage();
  }, []);

  return {
    reviewData,
    totPage,
    currPage,
    setCurrPage
  };
};
