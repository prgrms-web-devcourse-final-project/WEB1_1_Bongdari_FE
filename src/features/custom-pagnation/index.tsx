import Stack from '@mui/material/Stack';
import { CustomPaginationCss } from './indexCss';

const CustomPagination = ({
  totPage,
  currPage = 1,
  setCurrPage
}: {
  totPage?: number;
  currPage?: number;
  setCurrPage?: (page: number) => void;
}) => {
  // 페이지 이동시 currPage값 변경 함수
  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    if (setCurrPage) setCurrPage(page);
    // console.log('page', page);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Stack spacing={2} sx={{ margin: 'auto' }}>
        <CustomPaginationCss count={totPage} page={currPage} onChange={handlePageChange} />
      </Stack>
    </div>
  );
};
export default CustomPagination;
