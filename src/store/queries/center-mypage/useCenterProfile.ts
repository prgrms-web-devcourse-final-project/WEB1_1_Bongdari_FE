import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';

interface CenterProfile {
  name: string;
  contact_number: string;
  homepage_link: string;
  introduce: string;
  img_url?: string;
}

// 기관 프로필 get 해오는 fetch 함수
const fetchCenterProfile = async (centerId: string): Promise<CenterProfile> => {
  const response = await axiosInstance.get(`/api/center/profile/${centerId}`);
  return response.data;
};

// TODO: 기관 프로필 수정 put 만들어야 함

export const useGetCenterProfile = (centerId: string) => {
  return useQuery({
    queryKey: ['centerProfile', centerId],
    queryFn: () => fetchCenterProfile(centerId)
  });
};
