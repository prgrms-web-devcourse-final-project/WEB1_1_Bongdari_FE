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
  const parsedRecruitBoardId = id ? parseInt(id) : 0;

  const { page, handlePageChange } = usePagination();
  const { data: applicantsData, isLoading, isError } = useVolunteerApplies(parsedRecruitBoardId, page, 9, 'WAITING');

  if (isLoading) return <div style={{ paddingTop: '450px' }}>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <PageWrapper>
      <ApplicantStatusTitle title={title} />
      {applicantsData.content.length === 0 ? (
        <EmptyStateText>
          아직 봉사활동에 신청한 지원자가 없습니다.
          <br />
          조금만 더 기다려주세요!
        </EmptyStateText>
      ) : (
        <ApplicantList applicants={applicantsData.content} />
      )}
      <Stack spacing={2} sx={{ margin: 'auto' }}>
        <CustomPagination count={applicantsData.totalPages} onChange={handlePageChange} page={page + 1} />
      </Stack>
    </PageWrapper>
  );
};

export default AidRqApplicantListPage;
