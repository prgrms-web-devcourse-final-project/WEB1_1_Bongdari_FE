import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
import {
  StyledButton,
  StyledDialog,
  StyledDialogActions,
  StyledDialogContent,
  StyledDialogContentText
} from './indexCss';

export const AlertDialog = () => {
  const { isAlertOpen, alertMessage, closeAlert } = useAlertDialog();

  return (
    <StyledDialog open={isAlertOpen} onClose={closeAlert}>
      <StyledDialogContent>
        <StyledDialogContentText>{alertMessage}</StyledDialogContentText>
      </StyledDialogContent>
      <StyledDialogActions>
        <StyledButton onClick={closeAlert} autoFocus>
          확인
        </StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};
