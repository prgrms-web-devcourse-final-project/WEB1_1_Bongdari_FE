import axiosInstance from '@/api/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';

export type RecruitStatus = 'RECRUITING' | 'CLOSED' | 'COMPLETED';

interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

interface updateRecruitStatusProps {
  id: number;
  status: RecruitStatus;
}

const updateRecruitStatus = async ({ id, status }: updateRecruitStatusProps): Promise<ApiResponse<string>> => {
  const response = await axiosInstance.patch<ApiResponse<string>>(
    `/api/recruit-board/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('centerToken')}`
      }
    }
  );

  return response.data;
};

export const useUpdateRecruitStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateRecruitStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['recruitDetail'] });
      console.log('모집 상태가 성공적으로 변경됐습니다.', data);
    },
    onError: (error) => {
      console.error('봉사 모집글 상태 수정 실패', error);
    }
  });
};
