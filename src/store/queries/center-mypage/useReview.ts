// import axiosInstance from '@/api/apis';
// import { keepPreviousData, useQuery } from '@tanstack/react-query';

// export interface Review {
//   id: number;
//   volunteer_id: string;
//   volunteer_nickname: string;
//   title: string;
//   content: string;
//   img_url: string;
//   created_at: string;
//   updated_at: string;
// }

// interface ReviewResponse {
//   code: number;
//   message: string;
//   data: {
//     totalElements: number;
//     totalPages: number;
//     first: boolean;
//     last: boolean;
//     content: Review[];
//   };
// }

// interface ReviewParams {
//   centerId: string;
//   page: number;
//   size: number;
//   category?: string;
// }

// interface ApiResponse {
//   code: number;
//   message: string;
//   data: Review;
// }

// const fetchCenterReviews = async ({ centerId, page, size, category }: ReviewParams): Promise<ReviewResponse> => {
//   const params = new URLSearchParams({
//     page: page.toString(),
//     size: size.toString(),
//     sort: 'created_at,desc'
//   });

//   if (category) {
//     params.append('category', category);
//   }

//   const response = await axiosInstance.get(`/api/reviews/center/${centerId}?${params}`);
//   return response.data;
// };

// const fetchReviewById = async (reviewId: number): Promise<ApiResponse> => {
//   const response = await axiosInstance.get<ApiResponse>(`/api/review/${reviewId}`);
//   return response.data;
// };

// export const useGetCenterReviews = ({ centerId, page = 0, size = 10, category }: ReviewParams) => {
//   return useQuery({
//     queryKey: ['centerReviews', centerId, page, size, category],
//     queryFn: () => fetchCenterReviews({ centerId, page, size, category }),
//     placeholderData: keepPreviousData, // 페이지네이션 시 전 데이터 유지
//     staleTime: 1000 * 60 * 5, // 5분
//     select: (data) => ({
//       reviews: data.data.content,
//       pagination: {
//         totalElements: data.data.totalElements,
//         totalPages: data.data.totalPages,
//         isFirst: data.data.first,
//         isLast: data.data.last
//       }
//     })
//   });
// };

// //  단일 리뷰 get
// export const useGetReviewById = (reviewId?: number | null) => {
//   return useQuery({
//     queryKey: ['review', reviewId],
//     queryFn: () => fetchReviewById(reviewId as number),
//     enabled: !!reviewId
//   });
// };

import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';

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
  let url = `/api/reviews/center/${centerId}?page=${page}&size=10`;
  if (category) {
    url += `&category=${category}`;
  }

  const response = await axiosInstance.get(url);
  return response.data;
};

export const useGetCenterReviews = (centerId: string, page: number, category?: string) => {
  return useQuery({
    queryKey: ['centerReviews', centerId, page, category],
    queryFn: () => fetchCenterReviews(centerId, page, category),
    staleTime: 1000 * 60 * 5
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
