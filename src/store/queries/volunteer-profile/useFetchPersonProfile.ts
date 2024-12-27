import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';

const fetchPersonProfile = async (userId: string) => {
  const res = await axiosInstance.get(`/api/volunteer/profile/${userId}`);
  return res.data;
};

export const usePersonProfileQuery = (userId: string) => {
  return useQuery({
    queryKey: ['volunteerProfile'],
    queryFn: () => fetchPersonProfile(userId)
  });
};
