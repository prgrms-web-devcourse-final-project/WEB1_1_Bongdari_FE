import axiosInstance from '@/api/apis';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export interface Review {
  id: string;
  volunteer_id: string;
  volunteer_nickname: string;
  title: string;
  content: string;
  img_url: string;
  created_at: string;
  updated_at: string;
}

interface ReviewResponse {
  code: number;
  message: string;
  data: {
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
    content: Review[];
  };
}

interface ReviewParams {
  centerId: string;
  page: number;
  size: number;
  category?: string;
}

const fetchCenterReviews = async ({ centerId, page, size, category }: ReviewParams): Promise<ReviewResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
    sort: 'created_at,desc'
  });

  if (category) {
    params.append('category', category);
  }

  const response = await axiosInstance.get(`/api/reviews/center/${centerId}?${params}`);
  return response.data;
};

export const useGetCenterReviews = ({ centerId, page = 0, size = 10, category }: ReviewParams) => {
  return useQuery({
    queryKey: ['centerReviews', centerId, page, size, category],
    queryFn: () => fetchCenterReviews({ centerId, page, size, category }),
    placeholderData: keepPreviousData, // 페이지네이션 시 전 데이터 유지
    staleTime: 1000 * 60 * 5, // 5분
    select: (data) => ({
      reviews: data.data.content,
      pagination: {
        totalElements: data.data.totalElements,
        totalPages: data.data.totalPages,
        isFirst: data.data.first,
        isLast: data.data.last
      }
    })
  });
};
