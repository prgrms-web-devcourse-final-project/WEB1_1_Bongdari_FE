import axiosInstance from '@/api/apis';
import { PresentResponse } from '@/shared/types/aidrq-detail/PresentResponse';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

interface ApiResponse {
  code: number;
  message: string;
  data: PresentResponse | null;
}

export const myPresentStatus = async (
  setPresentState: Dispatch<SetStateAction<PresentResponse | null>>,
  requestId: string | undefined
) => {
  try {
    const response = await axiosInstance.get<unknown, ApiResponse>(`/api/volunteer-apply/recruit-board/${requestId}`);
    console.log('현재모집글에 대한 나의 지원상태', response);
    if (response.code === 200) {
      setPresentState(response.data);
    } else if (response.code === 210) {
      setPresentState({ id: 0, status: 'none', attended: false, is_reviewed: false });
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('지원상태 불러오기 에러', error);
    }
    throw error;
  }
};
