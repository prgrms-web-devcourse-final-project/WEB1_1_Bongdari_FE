import axios from 'axios';

export const testLoginCenter = async (id: string, pwd: string) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/api/center/sign-in`,
      {
        account_id: id,
        account_password: pwd
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
