import axiosInstance from '@/api/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// 물품 POST fetch 함수
const addPreferItem = async (itemName: string) => {
  const response = await axiosInstance.post('/api/preferItem', {
    item_name: itemName
  });

  return response.data;
};

export const usePreferItem = () => {
  const queryClient = useQueryClient();
  const { mutate: addItem, isPending } = useMutation({
    mutationFn: addPreferItem,
    onSuccess: () => {
      // 데이터 post 성공시
      queryClient.invalidateQueries({ queryKey: ['centerProfile'] });
    },
    onError: (error) => {
      // 등록 post 실패시
      console.error('물픔등록 실패...', error);
    }
  });

  return {
    addItem,
    isLoading: isPending
  };
};

// 기관 물품 삭제 api ------------------------------------------------------
const deletePreferItem = async (preferItemId: number) => {
  const response = await axiosInstance.delete(`/api/preferItem/${preferItemId}`);
  return response.data;
};

export const useDeletePreferItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePreferItem,
    onSuccess: () => {
      // 삭제 성공시 물품 리스트 갱신
      queryClient.invalidateQueries({ queryKey: ['centerProfile'] });
    },
    onError: (error) => {
      console.error('물품삭제 실패...', error);
    }
  });
};
