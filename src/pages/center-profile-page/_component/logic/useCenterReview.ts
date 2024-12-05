import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewType } from '@/shared/types/person-profile/personProfile';
import { fetchCenterReview } from './fetchCenterData';

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

  // 페이지 변경시 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      // url에 center_id가 있을 떄만 데이터 fetch
      if (center_id) {
        const data = await fetchCenterReview(center_id, currPage);
        if (data) setReviewData(data.data.content);
      }
    };
    fetchData();
  }, [currPage]);

  useEffect(() => {
    const fetchData = async () => {
      // url에 center_id가 있을 떄만 데이터 fetch
      if (center_id) {
        const data = await fetchCenterReview(center_id);
        if (data) setReviewData(data.data.content);
      } else {
        setReviewData([
          {
            id: '1',
            title: '서울도서관은 아주 유명한 도서관임1',
            createdTime: '2024.10.1',
            writer: '글쓴이11'
          },
          {
            id: '1',
            title: '서울도서관은 아주 유명한 도서관임2',
            createdTime: '2024.10.1',
            writer: '글쓴이22'
          },
          {
            id: '1',
            title: '서울도서관은 아주 유명한 도서관임3',
            createdTime: '2024.10.1',
            writer: '글쓴이'
          },
          {
            id: '1',
            title: '서울도서관은 아주 유명한 도서관임',
            createdTime: '2024.10.1',
            writer: '글쓴이'
          },
          {
            id: '1',
            title: '서울도서관은 아주 유명한 도서관임',
            createdTime: '2024.10.1',
            writer: '글쓴이'
          },
          {
            id: '1',
            title: '서울도서관은 아주 유명한 도서관임',
            createdTime: '2024.10.1',
            writer: '글쓴이'
          }
        ]);
      }
    };
    fetchData();

    setTotPage(reviewData?.length || 1);
  }, [center_id]);

  return { reviewData, totPage, currPage, setCurrPage };
};
