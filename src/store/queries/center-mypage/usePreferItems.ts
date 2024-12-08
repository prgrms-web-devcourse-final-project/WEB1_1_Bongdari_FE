import axiosInstance from '@/api/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import Cookies from 'js-cookie';

export interface PreferItemResponse {
  id: number;
  center_id: string;
  item_name: string;
}

// 물품 POST fetch 함수
const addPreferItem = async (itemName: string) => {
  // const response = await axiosInstance.post<PreferItemResponse>(
  //   '/api/preferItem',
  //   {
  //     item_name: itemName
  //   },
  //   {
  //     headers: {
  //       Authorization: `${Cookies.get('ACCESS')}`
  //     }
  //   }
  // );

  const response = await axiosInstance.post<PreferItemResponse>('/api/preferItem', {
    item_name: itemName
  });

  console.log('물품등록 response', response.data);

  return response.data;
};

// TODO: DELETE fetch 함수 구현

export const usePreferItem = () => {
  const queryClient = useQueryClient();
  const { mutate: addItem, isPending } = useMutation({
    mutationFn: addPreferItem,
    onSuccess: (data) => {
      // 데이터 post 성공시
      queryClient.invalidateQueries({ queryKey: ['preferItems'] });
      console.log('물품등록 완료!', data);
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
