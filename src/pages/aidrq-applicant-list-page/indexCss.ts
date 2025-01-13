import theme from '@/styles/theme';
import { Pagination } from '@mui/material';
import styled from 'styled-components';

export const CustomPagination = styled(Pagination)`
  .MuiPaginationItem-root.Mui-selected {
    background-color: ${theme.pointColor.Regular};
    color: #ffffff;

    &:hover {
      background-color: ${theme.pointColor.Regular};
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

export const PageWrapper = styled.div`
  ${theme.defaultPageCss.defaultPageCss}
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const EmptyStateText = styled.p`
  font-size: ${(props) => props.theme.fontSize.sixthSize};
  color: ${(props) => props.theme.colors.gray3};
  text-align: center;
  line-height: 1.5;
  padding-top: 5rem;
`;
