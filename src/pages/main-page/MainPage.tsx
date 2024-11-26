import AidRqDetailCenterProfile from '@/features/aidreq-detail-center-profile';
import { Wrapper } from './MainpageCss';
import RegisterGoods from '@/features/register-goods';

export default function MainPage() {
  return (
    <Wrapper>
      메인페이지입니다.
      <AidRqDetailCenterProfile></AidRqDetailCenterProfile>
      <RegisterGoods />
    </Wrapper>
  );
}
