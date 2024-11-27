import EditCenterProfile from '@/features/edit-center-profile';
import RegisterGoods from '@/features/register-goods';
import { PageWrapper } from './indexCss';
import ManageCenterPostSet from '@/features/manage-center-post-set';

const CenterPage = () => {
  return (
    <PageWrapper>
      <EditCenterProfile />
      <RegisterGoods />
      <ManageCenterPostSet />
    </PageWrapper>
  );
};

export default CenterPage;
