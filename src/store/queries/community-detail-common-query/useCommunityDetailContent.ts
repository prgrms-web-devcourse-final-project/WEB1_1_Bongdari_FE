import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/api/apis';
import { communityDetailType } from '@/shared/types/community-type/CommuntiyTypes';
import { resType } from '@/shared/types/resType';

const fetchCommunityDetailContent = async (content_id: number) => {
  const res: resType<communityDetailType> = await axiosInstance.get(`/api/community-board/${content_id}`);
  return res.data;
};

export const useCommunityDetail = (contentId: number) => {
  return useQuery({
    queryKey: ['communityDetail'],
    queryFn: () => fetchCommunityDetailContent(contentId)
  });
};
