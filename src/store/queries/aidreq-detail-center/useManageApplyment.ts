import axiosInstance from '@/api/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import Cookies from 'js-cookie';

// 봉사활동 지원 거절 api -------------------------------------------
const rejectApplyment = async (id: number) => {
  // const response = await axiosInstance.patch(
  //   `/api/volunteer-apply/${id}/reject`,
  //   {},
  //   {
  //     headers: { Authorization: `Bearer ${Cookies.get('ACCESS')}` }
  //   }
  // );

  const response = await axiosInstance.patch(`/api/volunteer-apply/${id}/reject`, {});
  return response.data;
};

export const useRejectApplyment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: rejectApplyment,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['volunteerApplies'] });
      console.log('반려 완료', data);
    },
    onError: (error) => {
      console.error('반려 실패', error);
    }
  });
};

// 봉사활동 지원 승인 api -------------------------------------------
const approveApplyment = async (id: number) => {
  // const response = await axiosInstance.patch(
  //   `/api/volunteer-apply/${id}/approve`,
  //   {},
  //   {
  //     headers: { Authorization: `Bearer ${Cookies.get('ACCESS')}` }
  //   }
  // );

  const response = await axiosInstance.patch(`/api/volunteer-apply/${id}/approve`);
  return response.data;
};

export const useApproveApplyment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: approveApplyment,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['volunteerApplies'] });
      console.log('승인 완료', data);
    },
    onError: (error) => {
      console.error('승인 실패', error);
    }
  });
};

// 봉사활동 지원 승인 정산 api ---------------------------------------
const settleApplyment = async (ids: number[]) => {
  // const response = await axiosInstance.post(
  //   '/api/volunteer-applies/settle',
  //   {
  //     ids
  //   },
  //   {
  //     headers: {
  //       Authorization: `${Cookies.get('ACCESS')}`
  //     }
  //   }
  // );

  const response = await axiosInstance.post('/api/volunteer-applies/settle', {
    ids
  });

  return response.data;
};

export const useSettleApplyment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: settleApplyment,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['settleApplyment'] });
      console.log('정산 완료', data);
    },
    onError: (error) => {
      console.log('정산 실패', error);
    }
  });
};
