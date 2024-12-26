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
    } else if (response.data.code !== 200) {
      console.log('백엔드에서 api명세를 다시 바꾼듯??');
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log('지원 안했음');
      //setPresentState를 210일때 set하다가, 다시 400일때 set하는거로 수정함
      setPresentState({ status: 'none', attended: false });
    }
    throw error;
  }
};
