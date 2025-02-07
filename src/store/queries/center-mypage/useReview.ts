import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';

// 리뷰 목록 조회
const fetchCenterReviews = async (centerId: string, page: number, category?: string) => {
  let url = `/api/reviews/center/${centerId}?page=${page}&size=10`;
  if (category) {
    url += `&category=${category}`;
  }

  const response = await axiosInstance.get(url, {});
  return response.data;
};

export const useGetCenterReviews = (centerId: string, page: number, category?: string) => {
  return useQuery({
    queryKey: ['centerReviews', centerId, page, category],
    queryFn: () => fetchCenterReviews(centerId, page, category),
    staleTime: 1000 * 60 * 5,
    enabled: !!centerId
  });
};

// 단일 리뷰 조회
const fetchReviewById = async (reviewId: number) => {
  const response = await axiosInstance.get(`/api/review/${reviewId}`);
  return response.data;
};

export const useGetReviewById = (reviewId: number) => {
  return useQuery({
    queryKey: ['review', reviewId],
    queryFn: () => fetchReviewById(reviewId),
    enabled: !!reviewId
  });
};
