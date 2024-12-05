import axios from 'axios';

export const myPresentStatus = async () => {
  try {
    const response = await axios.get(
      `https://api.somemore.site/api/volunteer-apply/recruit-board/1/volunteer/0e08233e-ff0e-4a85-b21b-edfb2087ca66`
    );
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        console.log('지원 안했음');
      }
    }
    throw error;
  }
};
