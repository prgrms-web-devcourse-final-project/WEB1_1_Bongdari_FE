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
  selectedReviewId: number;
  openReviewModal: boolean;
  handleReviewModal: (review: reviewType) => void;
  handleCloseReviewModal: () => void;
}

export const useMyReview = (): useMyReviewReturn => {
  const [reviewData, setReviewData] = useState<reviewType[]>();
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const { data } = useMyReviewQuery(myLoginId ?? '', currPage);
  const [selectedReviewId, setSelectedReviewId] = useState<number>(0);
  const [openReviewModal, setOpenReviewModal] = useState<boolean>(false);

  // 리뷰 모달 클릭시
  const handleReviewModal = (review: reviewType) => {
    setSelectedReviewId(review.id);
    setOpenReviewModal(true);
  };

  // 리뷰 모달 닫기 클릭시
  const handleCloseReviewModal = () => {
    setOpenReviewModal(false);
  };

  // 페이지 변경시 데이터 불러오기
  useEffect(() => {
    // 로그인 상태가 아니라면 불러오지 않기
    if (myLoginId && data) setReviewData(data.content);
    setReviewData([
      {
        id: 1,
        volunteer_id: '123id',
        volunteer_nickname: 'volnick',
        title: '젛아요',
        content: '너무 좋았습니다',
        img_url: '1',
        created_at: '19990301',
        update_at: '20521212'
      }
    ]);
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
  }, [data, reviewData, myLoginId]);

  return {
    reviewData,
    totPage,
    currPage,
    setCurrPage,
    selectedReviewId,
    openReviewModal,
    handleReviewModal,
    handleCloseReviewModal
  };
};
