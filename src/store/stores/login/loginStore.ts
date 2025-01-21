// zustand 상태 관리 하는 곳
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface LoginStoreState {
  isLoggedIn: boolean;
  myLoginId: string | null;
  loginType: 'ROLE_CENTER' | 'ROLE_VOLUNTEER' | null;
  setLoginInfo: (id: string, type: 'ROLE_CENTER' | 'ROLE_VOLUNTEER') => void; // login
  clearLoginInfo: () => void; // logout
}

export const useLoginStore = create(
  persist<LoginStoreState>(
    (set) => ({
      isLoggedIn: false,
      myLoginId: null,
      loginType: null,
      setLoginInfo: (id: string, type: 'ROLE_CENTER' | 'ROLE_VOLUNTEER') =>
        set((state) => ({
          ...state,
          myLoginId: id,
          loginType: type,
          isLoggedIn: true
        })),
      clearLoginInfo: () => {
        sessionStorage.removeItem('token');
        window.history.replaceState({}, document.title);
        set((state) => ({
          ...state,
          myLoginId: null,
          loginType: null,
          isLoggedIn: false
        }));
      }
    }),
    {
      name: 'login-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
