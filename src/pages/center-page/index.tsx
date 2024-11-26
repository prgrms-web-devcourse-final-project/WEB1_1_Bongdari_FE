import EditCenterProfile from '@/features/edit-center-profile';
import RegisterGoods from '@/features/register-goods';
import { PageWrapper } from './indexCss';

const CenterPage = () => {
  return (
    <PageWrapper>
      <EditCenterProfile />
      <RegisterGoods />
    </PageWrapper>
  );
};

export default CenterPage;
