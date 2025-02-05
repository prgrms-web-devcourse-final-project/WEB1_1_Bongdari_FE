import { updateLoginInfo } from '@/store/queries/update-login-info/updateLoginInfo';
import { useLoginStore } from '@/store/stores/login/loginStore';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 토큰 갱신 중임을 나타내는 변수
let isRefreshing = false;

// refreshSubscribers의 콜백 함수 타입 정의
type RefreshSubscriber = (token: string) => void;

// 토큰 갱신 대기중인 요청들을 저장하는 배열
let refreshSubscribers: RefreshSubscriber[] = [];

// 토큰 갱신 후 대기중인 요청들을 처리하는 함수
const onRefreshed = (newToken: string): void => {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
};

// 토큰 갱신을 기다리는 함수
const addRefreshSubscriber = (callback: RefreshSubscriber): void => {
  refreshSubscribers.push(callback);
};

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  async (error) => {
    const originalRequest = error.config;

    // 토큰이 만료되었고, 재시도하지 않은 요청인 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          // 토큰 갱신 요청
          const oldToken = localStorage.getItem('token');

          console.log('oldToken:', oldToken);

          const refreshResponse = await axios.post<{ data: string }>(
            `${import.meta.env.VITE_APP_BASE_URL}/api/auth/token/refresh`,
            { access_token: oldToken?.replace('Bearer ', '') },
            { withCredentials: true }
          );

          const newToken = `${refreshResponse.data.data}`;
          localStorage.setItem('token', newToken);

          console.log('newToken:', newToken);

          updateLoginInfo(newToken);

          isRefreshing = false;
          onRefreshed(newToken);

          console.log('newToken으로 갱신완료');

          // 원래 요청 재시도
          originalRequest.headers.Authorization = newToken;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.log('newToken으로 갱신실패');

          isRefreshing = false;
          localStorage.removeItem('token');
          useLoginStore.getState().clearLoginInfo();
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      } else {
        // 토큰 갱신 중인 경우, 새로운 토큰을 받을 때까지 대기
        return new Promise((resolve) => {
          addRefreshSubscriber((newToken: string) => {
            originalRequest.headers.Authorization = newToken;
            resolve(axiosInstance(originalRequest));
          });
        });
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
