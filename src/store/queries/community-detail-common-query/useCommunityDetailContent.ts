import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';

const fetchCommunityDetailContent = async (content_id?: number) => {
  const res = await axiosInstance.get(`/api/community-board/${content_id}`);
  return res.data;
};

export const useCommunityDetail = (contentId?: number) => {
  return useQuery({
    queryKey: ['communityDetail', contentId],
    queryFn: () => fetchCommunityDetailContent(contentId)
  });
};
