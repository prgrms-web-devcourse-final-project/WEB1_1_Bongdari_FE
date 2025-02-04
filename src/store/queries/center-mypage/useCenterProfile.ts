import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import axios from 'axios';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
// import Cookies from 'js-cookie';

// 수정 인터페이스
interface CommonBasicInfo {
  name: string;
  contact_number: string;
  img_url: string;
  introduce: string;
}

export interface CenterProfileUpdateRequest {
  common_basic_info: CommonBasicInfo;
  homepage_url: string;
}

// 기관 프로필 get 해오는 fetch 함수
const fetchCenterProfile = async (centerId: string): Promise<centerProfileType> => {
  const response = await axiosInstance.get(`/api/center/profile/${centerId}`);

  return response.data;
};

// 기관 프로필 수정 put
const updateCenterProfile = async (request: CenterProfileUpdateRequest) => {
  const response = await axiosInstance.put('/api/user/basic-info/center', request);
  return response.data;
};

// 기관 프로필 조회 훅
export const useGetCenterProfile = (centerId: string) => {
  return useQuery({
    queryKey: ['centerProfile', centerId],
    queryFn: () => fetchCenterProfile(centerId),
    enabled: !!centerId,
    staleTime: 1000 * 60 * 30, // 30분
    gcTime: 1000 * 60 * 60 // 1시간
  });
};

// 기관 프로필 수정 훅
export const useUpdateCenterProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCenterProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['centerProfile'] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        window.location.href = '/login';
        return;
      }
      throw error; // 다른 에러는 다시 throw
    }
  });
};
