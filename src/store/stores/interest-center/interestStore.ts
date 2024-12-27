import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';

interface interestCenterType {
  center_id: string;
  center_name: string;
  img_url: string;
}

interface InterestStore {
  centerIds: Set<string>;
  setCenterIds: (interests: interestCenterType[]) => void;
  addCenterId: (id: string) => void;
  removeCenterId: (id: string) => void;
}

// Set을 직렬화/역직렬화하기 위한 custom storage
const customStorage: StateStorage = {
  getItem: (name: string) => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    return str;
  },
  setItem: (name: string) => {
    try {
      const currentState = useInterestStore.getState();

      // 현재 상태의 centerIds를 배열로 변환하여 저장
      const serializedValue = JSON.stringify({
        state: {
          centerIds: Array.from(currentState.centerIds)
        },
        version: 0
      });
      localStorage.setItem(name, serializedValue);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  },
  removeItem: (name: string) => localStorage.removeItem(name)
};

const useInterestStore = create<InterestStore>()(
  persist(
    (set) => ({
      centerIds: new Set<string>(),

      setCenterIds: (interests) => {
        const ids = new Set(interests.map((interest) => interest.center_id));
        set({ centerIds: ids });
      },

      addCenterId: (id) =>
        set((state) => {
          const newIds = new Set(state.centerIds);
          newIds.add(id);
          return { centerIds: newIds };
        }),

      removeCenterId: (id) =>
        set((state) => {
          const newIds = new Set(state.centerIds);
          newIds.delete(id);
          return { centerIds: newIds };
        })
    }),
    {
      name: 'interest-storage',
      storage: createJSONStorage(() => customStorage)
    }
  )
);

export default useInterestStore;
