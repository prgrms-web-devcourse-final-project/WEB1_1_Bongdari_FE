import { Stack } from '@mui/material';
import { CustomPagination } from './indexCss';
import ApplicantStatusTitle from './ui/title';
import { PageWrapper } from '../admin-aidrq-list-page/indexCss';
import ApplicantList from '@/features/applicant-list';

const AidRqApplicantListPage = () => {
  return (
    <PageWrapper>
      <ApplicantStatusTitle />
      <ApplicantList />
      <Stack spacing={2} sx={{ margin: 'auto' }}>
        <CustomPagination count={5} />
      </Stack>
    </PageWrapper>
  );
};

export default AidRqApplicantListPage;
