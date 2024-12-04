import { Wrapper } from './indexCss';
import PMPGTop from './_component/PMPGTop';
import PMPGHalfLists from './_component/PMPGHalfLists';
import InterestCenterList from '@/features/personal-my-page-interest-center-list';
import ReviewList from '@/features/personal-my-page-review-list';

const PersonalMyPage = () => {
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
};
export default PersonalMyPage;
