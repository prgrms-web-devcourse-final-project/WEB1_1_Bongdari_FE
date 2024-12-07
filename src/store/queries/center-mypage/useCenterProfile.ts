import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import axios from 'axios';
import Cookies from 'js-cookie';

// 물품등록 관련 인터페이스
export interface PreferItem {
  id: number;
  centerId: string;
  itemName: string;
}

// 기관 프로필 조회에 필요한 인터페이스
export interface CenterProfile {
  center_id: string;
  name: string;
  contact_number: string;
  homepage_link: string;
  img_url?: string;
  introduce: string;
  prefer_items: PreferItem[];
}

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
const fetchCenterProfile = async (centerId: string): Promise<CenterProfile> => {
  const response = await axiosInstance.get(`/api/center/profile/${centerId}`);

  console.log('기관프로필 get 결과: ', response.data);

  return response.data;
};

// 기관 프로필 수정 put
const updateCenterProfile = async ({ data, img_file }: CenterProfileUpdateRequest) => {
  const formData = new FormData();

  formData.append('data', JSON.stringify(data));

  if (img_file instanceof File) {
    formData.append('img_file', img_file);
  }

  const response = await axiosInstance.put('/api/center/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${Cookies.get('ACCESS')}`
    }
  });

  // const response = await axios.put('https://api.somemore.site/api/center/profile', formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //     Authorization: `${Cookies.get('ACCESS')}`
  //   }
  // });

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
