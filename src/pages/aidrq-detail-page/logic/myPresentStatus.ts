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
    setPresentState(response.data.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        console.log('지원 안했음');
      }
    }
    throw error;
  }
};
