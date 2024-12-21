import { useQuery } from '@tanstack/react-query';
import { fetchCurrentRecruitment } from '../aidreq-detail-volunteer-query/useCurrentRecruitment';

export const useCurrentRecruitment = (id: number) => {
  return useQuery({
    queryKey: ['currentRecruitment', id],
    queryFn: () => fetchCurrentRecruitment(id),
    enabled: !!id
  });
};
