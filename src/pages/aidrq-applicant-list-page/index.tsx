import { Stack } from '@mui/material';
import { CustomPagination } from './indexCss';
import ApplicantStatusTitle from './ui/title';
import { PageWrapper } from '../admin-aidrq-list-page/indexCss';
import ApplicantList from '@/features/applicant-list';
import { useLocation, useParams } from 'react-router-dom';
import { useVolunteerApplies } from '@/store/queries/aidreq-detail-center/useApplicant';

const AidRqApplicantListPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const title = location.state?.title;
  const parsedRecruitBoardId = id ? parseInt(id) : 0;

  console.log('아이디', parsedRecruitBoardId);

  console.log('title이다', title);

  const { data: applicantsData, isLoading, isError } = useVolunteerApplies(parsedRecruitBoardId, 0, 10);
  console.log('데이터야 잘 있니?', applicantsData);

  if (isLoading) return <div style={{ paddingTop: '450px' }}>로딩 중...</div>;
  if (!applicantsData?.data?.content) return <div style={{ paddingTop: '450px' }}>데이터가 없습니다.</div>;
  if (isError) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;

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
