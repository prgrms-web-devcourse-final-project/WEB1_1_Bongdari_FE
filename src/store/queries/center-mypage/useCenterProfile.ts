import { useMutation, useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import Cookies from 'js-cookie';
// import Cookies from 'js-cookie';

// 물품등록 관련 인터페이스
export interface PreferItem {
  id: number;
  centerId: string;
  itemName: string;
}

// 기관 프로필 조회에 필요한 인터페이스
interface CenterProfile {
  center_id: string;
  name: string;
  contact_number: string;
  homepage_link: string;
  introduce: string;
  img_url?: string;
  prefer_items: PreferItem[];
}

// 수정 인터페이스
// interface CenterProfileData {
//   data: {
//     name: string;
//     contact_number: string;
//     homepage_link: string;
//     introduce: string;
//   };
//   img_url?: File;
// }

// interface CenterProfileUpdateRequest {
//   formData: CenterProfileData;
//   img_file?: string;
// }

// 응답 타입
// interface ApiResponse {
//   code: number;
//   message: string;
//   data: string;
// }

// 기관 프로필 get 해오는 fetch 함수
const fetchCenterProfile = async (centerId: string): Promise<CenterProfile> => {
  const response = await axiosInstance.get(`/api/center/profile/${centerId}`);

  console.log('기관프로필 get 결과: ', response.data);

  return response.data;
};

// 기관 프로필 수정 put
// const EditCenterProfile = async (formData: FormData): Promise<ApiResponse> => {
//   // const formData = new FormData();

// const jsonProfileData = {
//   name: data.name,
//   contact_number: data.contact_number,
//   homepage_link: data.homepage_link,
//   introduce: data.introduce
// };
//   // formData.append('data', JSON.stringify(jsonProfileData));

//   // if (data.img_file) {
//   //   formData.append('img_file', data.img_file);
//   // }

//   const response = await axiosInstance.put<ApiResponse>('/api/center/profile', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Accept: 'application/json',
//       Authorization: `Bearer ${Cookies.get('centerToken')}`
//     }
//   });

//   console.log('프로필 수정 결과!', response.data);
//   return response.data;
// };

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
// export const useEditCenterProfile = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: EditCenterProfile,
//     onSuccess: (data) => {
//       console.log('프로필 수정 완료!!', data);
//       queryClient.invalidateQueries({ queryKey: ['centerProfile'] });
//     }
//   });
// };

interface CenterProfileData {
  name: string;
  contact_number: string;
  homepage_link: string;
  introduce: string;
}

interface CenterProfileUpdateRequest {
  data: CenterProfileData;
  img_file?: File;
}

const updateCenterProfile = async ({ data, img_file }: CenterProfileUpdateRequest) => {
  const formData = new FormData();
  formData.append('data', JSON.stringify(data));
  if (img_file) {
    formData.append('img_file', img_file);
  }
  const response = await axiosInstance.put('/api/center/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${Cookies.get('centerToken')}`
    }
  });

  return response.data;
};

export const useUpdateCenterProfile = () => {
  return useMutation({
    mutationFn: updateCenterProfile,
    onSuccess: () => {
      // 성공 시 처리할 로직
      console.log('프로필이 성공적으로 수정되었습니다.');
    },
    onError: (error) => {
      // 에러 처리
      console.error('프로필 수정 중 오류가 발생했습니다:', error);
    }
  });
};
