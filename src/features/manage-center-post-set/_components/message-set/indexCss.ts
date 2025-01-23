import theme from '@/styles/theme';
import { Pagination } from '@mui/material';
import styled from 'styled-components';

interface ListItemProps {
  $isRead?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NoteSetTitle = styled.p`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 600;
  padding-bottom: 37px;

  @media (max-width: 1000px) {
    font-size: ${theme.fontSize.sixthSize};
    padding-left: 4px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 115px;

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
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 40px;
  cursor: pointer;

  @media (max-width: 1000px) {
    padding: 28px 18px;
  }
`;

export const ListItemTitle = styled.p<ListItemProps>`
  font-size: ${theme.fontSize.seventhSize};
  color: ${(props) => (props.$isRead ? '#8F8F8F' : '#000000')};
`;

export const Author = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: #a4a4a4;
`;

export const StateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;

  @media (max-width: 1000px) {
    gap: 1rem;
  }
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
