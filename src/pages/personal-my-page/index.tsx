import { Wrapper } from './indexCss';
import { useLoginStore } from '@/store/stores/login/loginStore';
import PMPGTop from './_component/PMPGTop';
import PMPGHalfLists from './_component/PMPGHalfLists';
import InterestCenterList from '@/features/personal-my-page-interest-center-list';
import ReviewList from '@/features/personal-my-page-review-list';

const PersonalMyPage = () => {
  const loginType = useLoginStore((state) => state.loginType);
  if (loginType !== 'ROLE_VOLUNTEER') {
    return <Wrapper>개인 회원만 접근 가능한 페이지입니다.</Wrapper>;
  } else {
    return (
      <Wrapper>
        <div className="innerWrap">
          <PMPGTop />
          <PMPGHalfLists />
          <InterestCenterList />
          <ReviewList />
        </div>
      </Wrapper>
    );
  }
};
export default PersonalMyPage;
