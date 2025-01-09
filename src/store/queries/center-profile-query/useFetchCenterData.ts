import axiosInstance from '@/api/apis';
import { reviewType } from '@/shared/types/person-profile/personProfile';
import { dataTypeWithPage, resType } from '@/shared/types/resType';
import { useQuery } from '@tanstack/react-query';

// 해당 기관 Profile 불러오기
const fetchCenterProfile = async (center_id: string) => {
  const res = await axiosInstance.get(`/api/center/profile/${center_id}`);

  return res.data;
};

export const useCenterProfile = (center_id: string) => {
  return useQuery({
    queryKey: ['centerProfile'],
    queryFn: () => fetchCenterProfile(center_id)
  });
};

// 해당 기관 Review 불러오기
const fetchCenterReview = async (center_id: string, page: number = 1, category?: string) => {
  const res: resType<dataTypeWithPage<reviewType>> = await axiosInstance.get(
    `/api/reviews/center/${center_id}?page=${page}` + category ? `&category=${category}` : ''
  );

  return res.data;
};

export const useCenterReviewQuery = (center_id: string, page: number = 1, category?: string) => {
  return useQuery({
    queryKey: ['centerReview', center_id, page, category],
    queryFn: () => fetchCenterReview(center_id, page, category)
  });
};
