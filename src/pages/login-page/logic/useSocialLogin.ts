export const handleNaverLogin = async () => {
  window.location.href = `${import.meta.env.VITE_APP_BASE_URL}/oauth2/authorization/naver`;
};

export const handleKakaoLogin = () => {
  console.log('카카오 로그인 시도');
};
