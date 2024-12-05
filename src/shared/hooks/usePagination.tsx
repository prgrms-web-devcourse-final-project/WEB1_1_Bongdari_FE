import { useState } from 'react';

interface UsePaginationProps {
  initialPage?: number;
  onPageChange?: () => void;
}

export const usePagination = ({ initialPage = 0, onPageChange }: UsePaginationProps = {}) => {
  const [page, setPage] = useState(initialPage);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
    onPageChange?.();
  };

  const resetPage = () => {
    setPage(0);
  };

  return {
    page,
    setPage,
    resetPage,
    handlePageChange,
    displayPage: page + 1 // mui Pagination은 1-based index 사용하기 때문에 + 1 해줌
  };
};
