import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';

// 타인 프로필 조회 api 인터페이스
export interface OtherVolunteerProfile {
  volunteer_id: string;
  nickname: string;
  img_url: string;
  introduce: string;
  tier: string;
  total_volunteer_hours: number;
  total_volunteer_count: number;
  detail: {
    name: string;
    email: string;
    gender: string;
    birth_date: string;
    contact_number: string;
  };
}
// // 타인프로필 조회 응답 인터페이스
// interface ApiResponse {
//   code: number;
//   message: string;
//   data: OtherVolunteerProfile;
// }

const fetchOtherVolunteerProfile = async (volunteerId: string) => {
  const response = await axiosInstance.get(`/api/volunteer/profile/${volunteerId}`);
  return response.data;
};

export const useGetOtherVolunteerProfile = (volunteerId: string) => {
  return useQuery({
    queryKey: ['otherVolunteerProfile', volunteerId],
    queryFn: () => fetchOtherVolunteerProfile(volunteerId),
    enabled: !!volunteerId
  });
};
