// zustand 상태 관리 하는 곳
import { create } from 'zustand';

interface LoginStoreState {
  isLoggedIn: boolean;
  myLoginId: string | null;
  loginType: 'center' | 'person' | null;
  setLoginInfo: (id: string, type: 'center' | 'person') => void; // login
  clearLoginInfo: () => void; // logout
}

export const useLoginStore = create<LoginStoreState>((set) => ({
  isLoggedIn: false,
  myLoginId: null,
  loginType: null,
  setLoginInfo: (id: string, type: 'center' | 'person') =>
    set((state) => ({
      ...state,
      myLoginId: id,
      loginType: type,
      isLoggedIn: true
    })),
  clearLoginInfo: () =>
    set((state) => ({
      ...state,
      myLoginId: null,
      loginType: null,
      isLoggedIn: false
    }))
}));
