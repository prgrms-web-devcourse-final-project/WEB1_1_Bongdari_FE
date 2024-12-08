import { Stack } from '@mui/material';
import { CustomPagination, EmptyStateText } from './indexCss';
import ApplicantStatusTitle from './ui/title';
import { PageWrapper } from '../admin-aidrq-list-page/indexCss';
import ApplicantList from '@/features/applicant-list';
import { useLocation, useParams } from 'react-router-dom';
import { useVolunteerApplies } from '@/store/queries/aidreq-detail-center/useApplicant';
import { usePagination } from '@/shared/hooks/usePagination';

const AidRqApplicantListPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const title = location.state?.title;
  const recruitStatus = location.state?.recruitStatus;
  const parsedRecruitBoardId = id ? parseInt(id) : 0;

  const { page, handlePageChange } = usePagination();
  const { data: applicantsData, isLoading, isError } = useVolunteerApplies(parsedRecruitBoardId, page, 9);

  console.log('모집글 상태', recruitStatus);

  if (isLoading) return <div style={{ paddingTop: '450px' }}>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <PageWrapper>
      <ApplicantStatusTitle title={title} />
      {applicantsData.length === 0 ? (
        <EmptyStateText>봉사활동에 신청한 지원자가 없습니다.</EmptyStateText>
      ) : (
        <ApplicantList applicants={applicantsData} recruitStatus={recruitStatus} />
      )}
      <Stack spacing={2} sx={{ margin: 'auto' }}>
        <CustomPagination count={applicantsData.totalPages} onChange={handlePageChange} page={page + 1} />
      </Stack>
    </PageWrapper>
  );
};

export default AidRqApplicantListPage;
