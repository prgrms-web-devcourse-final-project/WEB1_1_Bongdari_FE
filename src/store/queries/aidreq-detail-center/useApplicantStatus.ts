import { fetchCurrentRecruitment } from '@/features/aidreq-detail-info/_components/current-recruit/logic/fetchCurrentRecruitment';
import { useQuery } from '@tanstack/react-query';

export const useCurrentRecruitment = (id: number) => {
  return useQuery({
    queryKey: ['currentRecruitment', id],
    queryFn: () => fetchCurrentRecruitment(id),
    enabled: !!id
  });
};
