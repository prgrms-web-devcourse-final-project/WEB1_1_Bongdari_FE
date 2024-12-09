import DialogTitle from '@mui/material/DialogTitle';
import { useConfirmDialog } from '@/store/stores/dialog/dialogStore';
import {
  StyledButton,
  StyledButton2,
  StyledDialog,
  StyledDialogActions,
  StyledDialogContent,
  StyledDialogContentText
} from './indexCss';

export const ConfirmDialog = () => {
  const { isConfirmOpen, confirmMessage, onConfirm, closeConfirm } = useConfirmDialog();

  const formattedMessage = confirmMessage.replace(/([?.]) /g, '$1\n');

  const handleConfirm = () => {
    onConfirm();
    closeConfirm();
  };

  return (
    <StyledDialog open={isConfirmOpen} onClose={closeConfirm}>
      <DialogTitle>확인</DialogTitle>
      <StyledDialogContent>
        <StyledDialogContentText>{formattedMessage}</StyledDialogContentText>
      </StyledDialogContent>
      <StyledDialogActions>
        <StyledButton2 onClick={closeConfirm}>취소</StyledButton2>
        <StyledButton onClick={handleConfirm} autoFocus>
          확인
        </StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};
