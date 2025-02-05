import { useLoginStore } from '@/store/stores/login/loginStore';

export const updateLoginInfo = (token: string) => {
  try {
    if (!token) {
      useLoginStore.getState().clearLoginInfo();
      return;
    }

    const actualToken = token.replace('Bearer ', '');
    const payload = JSON.parse(atob(actualToken.split('.')[1]));

    const USER_ID = payload.userId;
    const ROLE_ID = payload.roleId;
    const ROLE = payload.role;

    if (ROLE === 'ROLE_CENTER' || ROLE === 'ROLE_VOLUNTEER') {
      useLoginStore.getState().setLoginInfo(USER_ID, ROLE_ID, ROLE);
    }
  } catch (error) {
    console.error('토큰 디코딩 실패:', error);
    return null;
  }
};
