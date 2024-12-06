import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    // 쿠키에서 토큰 가져오기
    const token = Cookies.get('ACCESS');

    // 토큰이 있다면 헤더에 추가
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request headers:', {
      Authorization: config.headers.Authorization
    });

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터는 그대로 유지
axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
