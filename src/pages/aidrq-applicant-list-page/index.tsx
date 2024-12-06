import { Stack } from '@mui/material';
import { CustomPagination } from './indexCss';
import ApplicantStatusTitle from './ui/title';
import { PageWrapper } from '../admin-aidrq-list-page/indexCss';
import ApplicantList from '@/features/applicant-list';
import { useLocation, useParams } from 'react-router-dom';
import { useVolunteerApplies } from '@/store/queries/aidreq-detail-center/useApplicant';

const AidRqApplicantListPage = () => {
  const { recruitBoardId } = useParams();
  const location = useLocation();
  const title = location.state?.title;
  const parsedRecruitBoardId = recruitBoardId ? parseInt(recruitBoardId) : 0;

  const { data: applicantsData, isLoading } = useVolunteerApplies(parsedRecruitBoardId);

  if (isLoading) return <div>로딩 중...</div>;
  if (!applicantsData?.data?.content) return <div>데이터가 없습니다.</div>;

  console.log('데이터야 잘 있니?', applicantsData);

  return (
    <PageWrapper>
      <ApplicantStatusTitle title={title} />
      <ApplicantList applicants={applicantsData.data.content} />
      <Stack spacing={2} sx={{ margin: 'auto' }}>
        <CustomPagination count={5} />
      </Stack>
    </PageWrapper>
  );
};

export default AidRqApplicantListPage;
