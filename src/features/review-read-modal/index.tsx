import Modal from '@/components/modal';
import {
  CreatedAt,
  GloveImg,
  ImgWrapper,
  ModalContentWrapper,
  NickName,
  ProfileBox,
  ProfileImg,
  ProfileInfo,
  ReviewContent,
  ReviewImg,
  ReviewImgBox,
  ReviewTitle,
  ReviewTitleBox,
  ScrollSection
} from './indexCss';
import { OtherButton } from '@/components/button';
import theme from '@/styles/theme';
import { useNavigate } from 'react-router-dom';
import useDateFormat from '@/shared/hooks/useDateFormat';
import { useGetReviewById } from '@/store/queries/center-mypage/useReview';
import { useGetOtherVolunteerProfile } from '@/store/queries/volunteer-profile/useVolunteerProfile';

interface ReviewModalProps {
  handleReviewModal: () => void;
  reviewId: number;
}

const ReviewReadModal: React.FC<ReviewModalProps> = ({ handleReviewModal, reviewId }) => {
  const navigate = useNavigate();
  const { formatDate } = useDateFormat();
  const { data: reviewData, isLoading: isReviewLoading } = useGetReviewById(reviewId);
  const { data: volunteerData, isLoading: isVolunteerLoading } = useGetOtherVolunteerProfile(
    reviewData?.data?.volunteer_id ?? null
  );

  if (isReviewLoading || isVolunteerLoading) return <div>로딩중...</div>;
  if (!reviewData?.data || !volunteerData?.data) return null;

  const review = reviewData.data;
  const volunteer = volunteerData.data;

  return (
    <Modal variant="big" isOpen onClose={handleReviewModal}>
      <ModalContentWrapper>
        <ScrollSection>
          <ReviewTitleBox>
            <ReviewTitle>{review.title}</ReviewTitle>
            <CreatedAt>{formatDate(review.created_at)}</CreatedAt>
          </ReviewTitleBox>
          <ReviewImgBox>
            {review.img_url && (
              <ReviewImgBox>
                <ReviewImg src={review.img_url} alt="reviewImg" />
              </ReviewImgBox>
            )}
          </ReviewImgBox>
          <ReviewContent>{review.content}</ReviewContent>
          <ProfileBox>
            <ProfileInfo>
              <ImgWrapper>
                <ProfileImg src={volunteer.img_url || '/assets/imgs/user-icon.svg'} alt="profileImg" />
              </ImgWrapper>
              <NickName>{volunteer.nickname}</NickName>
              <GloveImg src={`/assets/imgs/tier-${volunteer.tier.toLowerCase()}.svg`} alt="tierGlove" />
            </ProfileInfo>
            <OtherButton
              label="프로필 확인하기"
              width="221px"
              height="53px"
              fontSize={theme.fontSize.eighthSize}
              fontWeight="600"
              onClick={() => {
                navigate(`/profile/${volunteer.volunteer_id}`);
              }}
            />
          </ProfileBox>
        </ScrollSection>
      </ModalContentWrapper>
    </Modal>
  );
};

export default ReviewReadModal;
