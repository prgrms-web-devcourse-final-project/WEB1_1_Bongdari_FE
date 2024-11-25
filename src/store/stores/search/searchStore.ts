import { create } from 'zustand';

interface SearchState {
  keyword: string;
  type: string;
  region: string;
  admitted: string;
  sort: string;
  status: string;
  // 상태 업데이트 함수들
  setKeyword: (keyword: string) => void;
  setType: (type: string) => void;
  setRegion: (region: string) => void;
  setAdmitted: (admitted: string) => void;
  setSort: (sort: string) => void;
  setStatus: (sstatusrt: string) => void;
  // 전체 상태를 한번에 업데이트하는 함수
  setSearchState: (
    state: Partial<
      Omit<
        SearchState,
        | 'setSearchState'
        | 'setKeyword'
        | 'setType'
        | 'setRegion'
        | 'setAdmitted'
        | 'setSort'
        | 'setStatus'
        | 'resetSearch'
      >
    >
  ) => void;
  // 초기화 함수
  resetSearch: () => void;
}

const initialState = {
  keyword: '',
  type: '',
  region: '',
  admitted: '',
  sort: '',
  status: ''
};

const useSearchStore = create<SearchState>((set) => ({
  ...initialState,

  setKeyword: (keyword) => set({ keyword }),
  setType: (type) => set({ type }),
  setRegion: (region) => set({ region }),
  setAdmitted: (admitted) => set({ admitted }),
  setSort: (sort) => set({ sort }),
  setStatus: (status) => set({ status }),

  setSearchState: (newState) =>
    set((state) => ({
      ...state,
      ...newState
    })),

  resetSearch: () => set(initialState)
}));

export default useSearchStore;
