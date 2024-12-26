import axiosInstance from '@/api/apis';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { AidRqDetailType } from '@/shared/types/aidrq-detail/aidrqDetailType';

// 모집글 (기관용) 상세 페이지 불러오기기
const fetchRecruitDetail = async (id: number): Promise<AidRqDetailType> => {
  const response = await axiosInstance.get(`/api/recruit-board/${id}`);
  return response.data;
};

export const useGetRecruitDetail = (id: number) => {
  return useQuery({
    queryKey: ['recruitDetail', id],
    queryFn: () => fetchRecruitDetail(id),
    staleTime: 1000 * 60 * 5,
    enabled: Boolean(id)
  });
};

// 모집글 (기관용) 상세 페이지 삭제 api
const deleteAidRq = async (id: number) => {
  const response = await axiosInstance.delete(`/api/recruit-board/${id}`);
  return response.data;
};

export const useDeleteAidRq = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteAidRq(id),
    onSuccess: () => {
      // 해당 글을 삭제하면 목록에 있는 데이터도 삭제돼서 갱신돼야 하기 때문에 캐시 무효화 로직 추가
      queryClient.invalidateQueries({ queryKey: ['recruitDetail'] });
      // 무효화하고 목록 데이터를 다시 불러와서 삭제된 항목이 제거된 최신 목록 가져오기
      queryClient.invalidateQueries({ queryKey: ['recruitList'] });
    }
  });
};
