import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface LoginStoreState {
  isLoggedIn: boolean;
  myLoginId: string | null;
  myRoleId: string | null; // 추가된 부분
  loginType: 'ROLE_CENTER' | 'ROLE_VOLUNTEER' | null;
  setLoginInfo: (id: string, roleId: string, type: 'ROLE_CENTER' | 'ROLE_VOLUNTEER') => void; // roleId 파라미터 추가
  clearLoginInfo: () => void;
}

export const useLoginStore = create(
  persist<LoginStoreState>(
    (set) => ({
      isLoggedIn: false,
      myLoginId: null,
      myRoleId: null, // 추가된 부분
      loginType: null,
      setLoginInfo: (id: string, roleId: string, type: 'ROLE_CENTER' | 'ROLE_VOLUNTEER') =>
        set((state) => ({
          ...state,
          myLoginId: id,
          myRoleId: roleId, // 추가된 부분
          loginType: type,
          isLoggedIn: true
        })),
      clearLoginInfo: () => {
        sessionStorage.removeItem('token');
        window.history.replaceState({}, document.title);
        set((state) => ({
          ...state,
          myLoginId: null,
          myRoleId: null, // 추가된 부분
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
