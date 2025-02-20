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

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 22px;
  }
`;

export const ReviewSetTitle = styled.p`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 600;
  cursor: default;

  @media (max-width: 1000px) {
    font-size: ${theme.fontSize.sixthSize};
    font-weight: 600;
    margin-right: auto;
    padding-left: 4px;
  }
`;

export const ReviewListCss = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 80px;

  .noData {
    margin-top: 1rem;
    height: 600px;
    width: 100%;
    border: 1px dashed gray;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  border-bottom: 1px solid #d1d1d1;
  background-color: ${theme.box.section.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  cursor: pointer;
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

export const NoReview = styled.div`
  padding: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
