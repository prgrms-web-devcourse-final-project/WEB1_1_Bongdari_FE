import EditCenterProfile from '@/features/edit-cetner-profile';
import { Wrapper } from './MainpageCss';

export default function MainPage() {
  return (
    <>
      <Wrapper>
        메인페이지입니다.
        <EditCenterProfile />
      </Wrapper>
    </>
  );
}
