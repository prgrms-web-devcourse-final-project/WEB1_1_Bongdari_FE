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

// 프리사인드 이미지 업로드를 위한 타입 정의
// interface PresignedUrlResponse {
//   code: number;
//   data: string;
// }

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

// // 이미지 프로필 수정 put 훅
export const useUpdateProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file: File) => {
      try {
        const response = await axiosInstance.put('/api/user/image', {
          file_name: file.name
        });

        if (!response.data) {
          throw new Error('프리사인드 url이 존재하지 않습니다.');
        }

        // pre-signed url &와 = 앞에 이스케이프(\) 추가
        const escapedUrl = response.data.replace(/([&=])/g, '\\$1');

        // 이스케이프된 url로 파일 업로드
        await axios.put(escapedUrl, file);
      } catch (error) {
        console.error('pre-signed 이미지 업로드 중 오류 발생:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['centerProfile'] });
    }
  });
};
