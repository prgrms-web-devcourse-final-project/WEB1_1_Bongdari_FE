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
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 115px;
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
