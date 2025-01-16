import { useGetReviewById } from '@/store/queries/center-mypage/useReview';
import { usePersonProfileQuery } from '@/store/queries/volunteer-profile/useFetchPersonProfile';
import { useCenterProfile } from '@/store/queries/center-profile-query/useFetchCenterData';
import { personProfileType, reviewType } from '@/shared/types/person-profile/personProfile';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';

// ReviewList에 쓰이는 use
interface useFindReviewProps {
  isCenterReview: boolean;
  reviewId: number;
}

interface useFindReviewReturn {
  reviewData: reviewType | undefined;
  volunteerData?: personProfileType;
  centerData?: centerProfileType;
}

export const useFindReview = ({ isCenterReview, reviewId }: useFindReviewProps): useFindReviewReturn => {
  const { data: reviewData, isLoading: isReviewLoading } = useGetReviewById(reviewId);
  const { openAlert } = useAlertDialog();

  // 항상 Hook 호출, 조건부로 쿼리를 활성화
  const { data: volunteerData } = usePersonProfileQuery(reviewData?.volunteer_id, {
    enabled: isCenterReview && !!reviewData?.volunteer_id // isCenterReview가 true일 때만 실행
  });

  const { data: centerData } = useCenterProfile(reviewData?.volunteer_id, {
    enabled: !isCenterReview && !!reviewData?.volunteer_id // isCenterReview가 false일 때만 실행
  });

  if (!reviewData && !isReviewLoading) {
    openAlert('리뷰를 찾을 수 없습니다.');
    return { reviewData: undefined };
  }

  // console.log('review data:', reviewData);
  // if (isReviewLoading) console.log('리뷰 로딩중');

  return {
    reviewData,
    volunteerData,
    centerData
  };
};
