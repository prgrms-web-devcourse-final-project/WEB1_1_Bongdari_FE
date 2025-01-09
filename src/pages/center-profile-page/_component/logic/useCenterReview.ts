import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewType } from '@/shared/types/person-profile/personProfile';
import { useCenterReviewQuery } from '@/store/queries/center-profile-query/useFetchCenterData';
import aidrqCategoryMapping from '@/shared/mapping/aidrq-category-mapping';

interface useCenterReviewReturn {
  reviewData: reviewType[] | undefined;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
  handleSelectedOption: (option: string) => void;
}

export const useCenterReview = (): useCenterReviewReturn => {
  const { center_id } = useParams();
  const [reviewData, setReviewData] = useState<reviewType[]>();
  const [totPage, setTotPage] = useState<number>(1);
  const [currPage, setCurrPage] = useState<number>(1);
  const [category, setCategory] = useState('');

  const handleSelectedOption = (selectOption: string) => {
    setCategory(selectOption === '전체' ? '' : selectOption);
  };

  const { data } = useCenterReviewQuery(
    center_id ?? '',
    currPage,
    category ? aidrqCategoryMapping[category] : undefined
  );

  // 페이지 변경시 데이터 불러오기
  useEffect(() => {
    if (center_id && data) {
      setReviewData(data.content);
      setTotPage(data.totalPages);
    }
  }, [center_id, data]);

  return { reviewData, totPage, currPage, setCurrPage, handleSelectedOption };
};
