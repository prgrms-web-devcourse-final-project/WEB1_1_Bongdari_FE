import { create } from 'zustand';

interface SearchState {
  keyword: string;
  category: string;
  region: string | null;
  admitted: null | boolean;
  sort: string;
  status: string;
  // 상태 업데이트 함수들
  setKeyword: (keyword: string) => void;
  setCategory: (category: string) => void;
  setRegion: (region: string | null) => void;
  setAdmitted: (admitted: null | boolean) => void;
  setSort: (sort: string) => void;
  setStatus: (status: string) => void;
  // 전체 상태를 한번에 업데이트하는 함수
  setSearchState: (
    state: Partial<
      Omit<
        SearchState,
        | 'setSearchState'
        | 'setKeyword'
        | 'setCategory'
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
  category: '',
  region: null,
  admitted: null,
  sort: '',
  status: 'RECRUITING'
};

const useSearchStore = create<SearchState>((set) => ({
  ...initialState,

  setKeyword: (keyword) => set({ keyword }),
  setCategory: (category) => set({ category }),
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
