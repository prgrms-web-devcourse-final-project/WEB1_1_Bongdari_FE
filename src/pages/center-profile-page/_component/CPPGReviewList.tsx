import { CPPGReviewListCss } from './CPPGReviewListCss';
import CenterReviewList from '@/features/center-review-list';

const CPPGReviewList = ({ center_id }: { center_id: string }) => {
  return (
    <CPPGReviewListCss>
      <CenterReviewList centerId={center_id} />
    </CPPGReviewListCss>
  );
};
export default CPPGReviewList;
