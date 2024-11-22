import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  withCredentials: true
});

axiosInstance.interceptors.request.use(
  (config) => {
    // 요청 보내기 전에 수행 로직
    return config;
  },
  (error) => {
    // 요청 에러 시 수행 로직
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    // 응답에 대한 로직
    const res = response.data;
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
