import { create } from 'zustand';

interface ConfirmDialogState {
  isConfirmOpen: boolean;
  confirmMessage: string;
  onConfirm: () => void;
  openConfirm: (message: string, onConfirm: () => void) => void;
  closeConfirm: () => void;
}

interface AlertDialogState {
  isAlertOpen: boolean;
  alertMessage: string;
  openAlert: (message: string) => void;
  closeAlert: () => void;
}

export const useConfirmDialog = create<ConfirmDialogState>((set) => ({
  isConfirmOpen: false,
  confirmMessage: '',
  onConfirm: () => {},
  openConfirm: (message, onConfirm) => set({ isConfirmOpen: true, confirmMessage: message, onConfirm }),
  closeConfirm: () => set({ isConfirmOpen: false })
}));

export const useAlertDialog = create<AlertDialogState>((set) => ({
  isAlertOpen: false,
  alertMessage: '',
  openAlert: (message) => set({ isAlertOpen: true, alertMessage: message }),
  closeAlert: () => set({ isAlertOpen: false })
}));
