import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

interface PresentResponse {
  status: string;
  attended: boolean;
}

export const myPresentStatus = async (
  setPresentState: Dispatch<SetStateAction<PresentResponse | null>>,
  volunteerId: string | null,
  requestId: string | undefined
) => {
  try {
    const response = await axios.get(
      `https://api.somemore.site/api/volunteer-apply/recruit-board/${requestId}/volunteer/${volunteerId}`
    );
    if (response.data.code === 200) {
      setPresentState(response.data.data);
    } else if (response.data.code === 210) {
      setPresentState({ status: 'none', attended: false });
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log('지원 안했음');
    }
    throw error;
  }
};
