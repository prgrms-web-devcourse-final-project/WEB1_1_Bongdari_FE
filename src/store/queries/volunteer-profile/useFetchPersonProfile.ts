import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';

const fetchPersonProfile = async (volunteerId: string) => {
  const res = await axiosInstance.get(`/api/volunteer/profile/${volunteerId}`);
  return res.data;
};

export const usePersonProfileQuery = (volunteerId: string, options = {}) => {
  return useQuery({
    queryKey: ['volunteerProfile', volunteerId],
    queryFn: () => fetchPersonProfile(volunteerId),
    enabled: !!volunteerId,
    ...options
  });
};
