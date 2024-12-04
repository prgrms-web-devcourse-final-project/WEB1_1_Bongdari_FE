import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';

// 물품등록 관련 인터페이스
export interface PreferItem {
  id: number;
  centerId: string;
  itemName: string;
}

// 기관 프로필 조회에 필요한 인터페이스
interface CenterProfile {
  centerId: string;
  name: string;
  contact_number: string;
  homepage_link: string;
  introduce: string;
  img_url?: string;
  prefer_items: PreferItem[];
}

// 프로필 수정을 위한 인터페이스
interface EditProfileData {
  name: string;
  contact_number: string;
  homepage_link: string;
  introduce: string;
  img_file?: File;
}

// 기관 프로필 get 해오는 fetch 함수
const fetchCenterProfile = async (centerId: string): Promise<CenterProfile> => {
  const response = await axiosInstance.get(`/api/center/profile/${centerId}`);

  console.log('기관프로필 get 결과: ', response.data);

  return response.data;
};

// 기관 프로필 수정 put
const EditCenterProfile = async (data: EditProfileData): Promise<CenterProfile> => {
  const formData = new FormData();

  const jsonProfileData = {
    name: data.name,
    contact_number: data.contact_number,
    homepage_link: data.homepage_link,
    introduce: data.introduce
  };
  formData.append('data', JSON.stringify(jsonProfileData));

  if (data.img_file) {
    formData.append('img_file', data.img_file);
  }

  const response = await axiosInstance.put('/api/center/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  console.log('프로필 수정 결과!', response.data);
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
export const useEditCenterProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: EditCenterProfile,
    onSuccess: (data) => {
      console.log('프로필 수정 완료!!', data);
      queryClient.invalidateQueries({ queryKey: ['centerProfile'] });
    }
  });
};
