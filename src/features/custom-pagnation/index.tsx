import Stack from '@mui/material/Stack';
import { CustomPaginationCss } from './indexCss';
import { useSearchParams } from 'react-router-dom';

const CustomPagination = ({
  totPage,
  currPage = 1,
  setCurrPage
}: {
  totPage?: number;
  currPage?: number;
  setCurrPage?: (page: number) => void;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 페이지 이동시 currPage값 변경 함수
  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    if (setCurrPage) setCurrPage(page);
    else {
      // set함수 없으면 querystring으로 page 조작
      const currentParams = new URLSearchParams(searchParams);
      currentParams.set('page', `${page}`); // page 값만 업데이트
      setSearchParams(currentParams);
    }
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
