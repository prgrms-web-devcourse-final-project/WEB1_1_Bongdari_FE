import type { AidRequest } from '@/shared/types/aidrq-list-item/aidrqListItemType';
import { create } from 'zustand';

interface AidRequestStore {
  aidRequests: AidRequest[];
  setAidRequests: (requests: AidRequest[]) => void;
}

export const useAidRequestStore = create<AidRequestStore>((set) => ({
  aidRequests: [],
  setAidRequests: (requests) => set({ aidRequests: requests })
}));
