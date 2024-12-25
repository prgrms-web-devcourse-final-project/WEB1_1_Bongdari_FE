import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import axios from 'axios';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
// import Cookies from 'js-cookie';

// 수정 인터페이스
interface CenterProfileUpdateData {
  name: string;
  contact_number: string;
  homepage_link: string;
  introduce: string;
}

interface CenterProfileUpdateRequest {
  data: CenterProfileUpdateData;
  img_file?: File;
}

// 기관 프로필 get 해오는 fetch 함수
const fetchCenterProfile = async (centerId: string): Promise<centerProfileType> => {
  const response = await axiosInstance.get(`/api/center/profile/${centerId}`);

  // console.log('기관프로필 get 결과: ', response.data);

  return response.data;
};

// 기관 프로필 수정 put
const updateCenterProfile = async ({ data, img_file }: CenterProfileUpdateRequest) => {
  const formData = new FormData();

  formData.append('data', JSON.stringify(data));

  // 새로운 이미지가 있을 때만 img_file 필드 추가
  if (img_file && img_file instanceof File) {
    formData.append('img_file', img_file);
  }
  // img_file이 없으면 기존 이미지 유지를 위해 필드 자체를 포함하지 않음

  // 로깅
  for (const [key, value] of formData.entries()) {
    console.log(`${key}:`, value instanceof File ? 'File object' : value);
  }

  // const response = await axiosInstance.put('/api/center/profile', formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //     Authorization: `Bearer ${Cookies.get('ACCESS')}`
  //   }
  // });

  const response = await axiosInstance.put('/api/center/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

// 기관 프로필 조회 훅
export const useGetCenterProfile = (centerId: string) => {
  return useQuery({
    queryKey: ['centerProfile', centerId],
    queryFn: () => fetchCenterProfile(centerId),
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
