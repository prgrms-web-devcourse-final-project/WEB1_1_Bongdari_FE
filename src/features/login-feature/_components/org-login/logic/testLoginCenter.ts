import axios from 'axios';

//기관로그인은 폼데이터로

export const testLoginCenter = async (id: string, pwd: string) => {
  try {
    // FormData 객체 생성
    const formData = new FormData();
    formData.append('account_id', id);
    formData.append('account_password', pwd);

    const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/center/sign-in`, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
