import axiosInstance from '@/api/apis';
import { ApplicantDetailInfo } from '@/shared/types/aidrq-volunteer-list/volunteerListType';
import { useQuery } from '@tanstack/react-query';

const fetchApplicantDetail = async (volunteerId: string): Promise<ApplicantDetailInfo> => {
  const response = await axiosInstance.get(`/api/volunteer/profile/volunteer-id/${volunteerId}`);

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
