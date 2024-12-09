import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import theme from '@/styles/theme';

export const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    border-radius: 8px;
    padding: 8px;
    padding: 1rem;
  }
`;

export const StyledDialogContent = styled(DialogContent)`
  min-width: 300px;
  padding: 20px;
`;

export const StyledDialogContentText = styled(DialogContentText)`
  text-align: center;
  cursor: default;
`;

export const StyledDialogActions = styled(DialogActions)`
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    color: ${theme.pointColor.Regular};
    padding: 8px 24px;
    border-radius: 8px;

    &:hover {
      color: ${theme.pointColor.event};
    }
  }
`;
