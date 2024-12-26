import axiosInstance from '@/api/apis';
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
const fetchCenterReview = async (center_id: string, page: number = 1) => {
  const res = await axiosInstance.get(`/api/reviews/center/${center_id}?page=${page}`);

  return res.data;
};

export const useCenterReview = (center_id: string, page: number = 1) => {
  return useQuery({
    queryKey: ['community'],
    queryFn: () => fetchCenterReview(center_id, page)
  });
};
