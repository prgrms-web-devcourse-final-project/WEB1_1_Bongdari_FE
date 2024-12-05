import theme from '@/styles/theme';
import { Pagination } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000000;
  padding-bottom: 30px;
`;

export const ReviewSetTitle = styled.p`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 600;
  cursor: default;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 80px;
`;

export const ListItem = styled.li`
  border-bottom: 1px solid #d1d1d1;
  background-color: ${theme.box.section.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
`;

export const ItemTitle = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  font-weight: 600;
  cursor: pointer;
`;

export const Author = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: #a4a4a4;
`;

export const CustomPagination = styled(Pagination)`
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

export const NoReview = styled.div`
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
