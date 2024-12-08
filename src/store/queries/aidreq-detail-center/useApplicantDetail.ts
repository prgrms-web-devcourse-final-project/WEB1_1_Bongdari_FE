import axiosInstance from '@/api/apis';
import { useQuery } from '@tanstack/react-query';
// import Cookies from 'js-cookie';

// 지원자 리스트 상세 모달 api
interface ApplicantDetailInfo {
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
    gender: 'MALE' | 'FEMALE';
    birth_date: string;
    contact_number: string;
  };
}

const fetchApplicantDetail = async (volunteerId: string): Promise<ApplicantDetailInfo> => {
  // const response = await axiosInstance.get(`/api/volunteer/profile/${volunteerId}/detailed`, {
  //   headers: {
  //     Authorization: `${Cookies.get('ACCESS')}`
  //   }
  // });

  const response = await axiosInstance.get(`/api/volunteer/profile/${volunteerId}/detailed`);

  return response.data;
};

const useApplicantDetail = (volunteerId: string) => {
  return useQuery({
    queryKey: ['volunteerId', volunteerId],
    queryFn: () => fetchApplicantDetail(volunteerId),
    staleTime: 1000 * 60 * 5,
    enabled: !!volunteerId
  });
};

export default useApplicantDetail;
