import styled from 'styled-components';
import theme from '@/styles/theme';
import { Pagination } from '@mui/material';

export const CustomPaginationCss = styled(Pagination)`
  .MuiPaginationItem-root.Mui-selected {
    background-color: ${theme.pointColor.Regular};
    color: #ffffff;

    &:hover {
      background-color: ${theme.pointColor.Regular}dd;
    }
  }

  .MuiPaginationItem-root {
    color: #848484;
    font-size: ${theme.fontSize.seventhSize};
    display: flex;
    justify-content: center;
    width: 39px;
    height: 39px;
    border-radius: 50%;
    transition: 0.3s;

    &:hover {
      background-color: ${theme.pointColor.Regular};
      color: #ffffff;
    }
  }
`;
