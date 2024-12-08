import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

export interface Review {
  id: number;
  volunteer_id: string;
  volunteer_nickname: string;
  title: string;
  content: string;
  img_url: string;
  created_at: string;
  updated_at: string;
}

// 리뷰 목록 조회
const fetchCenterReviews = async (centerId: string, page: number, category?: string) => {
  let url = `/api/reviews/center/${centerId}?page=${page}&size=8`;
  if (category) {
    url += `&category=${category}`;
  }

  const response = await axiosInstance.get(url, {
    headers: {
      Authorization: `Bearer ${Cookies.get('ACCESS')}`
    }
  });
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
  return response.data.data;
};

export const useGetReviewById = (reviewId: number) => {
  return useQuery({
    queryKey: ['review', reviewId],
    queryFn: () => fetchReviewById(reviewId),
    enabled: !!reviewId
  });
};
