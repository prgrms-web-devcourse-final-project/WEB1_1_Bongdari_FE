import axios from 'axios';

export const applyAidRq = async (id: string | undefined) => {
  try {
    const response = await axios.post(
      'https://api.somemore.site/api/volunteer-apply',
      {
        recruit_board_id: id
      }
      // 헤더에 자동으로 토큰 포함함
    );
    console.log(response);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || '지원 중 오류가 발생했습니다');
    }
    throw error;
  }
};
