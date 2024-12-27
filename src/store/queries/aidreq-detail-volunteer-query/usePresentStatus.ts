import { PresentResponse } from '@/shared/types/aidrq-detail/PresentResponse';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

export const myPresentStatus = async (
  setPresentState: Dispatch<SetStateAction<PresentResponse | null>>,
  volunteerId: string | null,
  requestId: string | undefined
) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/api/volunteer-apply/recruit-board/${requestId}/volunteer/${volunteerId}`
    );
    console.log('현재모집글에 대한 나의 지원상태', response.data);
    if (response.data.code === 200) {
      setPresentState(response.data.data);
    } else if (response.data.code === 210) {
      setPresentState({ status: 'none', attended: false });
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log('지원상태 불러오기 에러', error);
    }
    throw error;
  }
};
