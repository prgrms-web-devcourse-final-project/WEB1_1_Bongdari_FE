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
  handleCloseReviewModal: () => void;
  reviewId: number;
}

const ReviewReadModal = ({ handleCloseReviewModal, reviewId }: ReviewModalProps) => {
  const navigate = useNavigate();
  const { formatDate } = useDateFormat();
  const { data: reviewData, isLoading: isReviewLoading } = useGetReviewById(reviewId);
  const { data: volunteerData, isLoading: isVolunteerLoading } = useGetOtherVolunteerProfile(reviewData?.volunteer_id);

  if (isReviewLoading || isVolunteerLoading) return <div>로딩중...</div>;
  if (!reviewData || !volunteerData) return null;

  console.log('reviewData', reviewData);
  console.log('volunteerData', volunteerData);

  return (
    <Modal variant="big" isOpen onClose={handleCloseReviewModal}>
      <ModalContentWrapper>
        <ScrollSection>
          <ReviewTitleBox>
            <ReviewTitle>{reviewData.title}</ReviewTitle>
            <CreatedAt>{formatDate(reviewData.created_at)}</CreatedAt>
          </ReviewTitleBox>
          <ReviewImgBox>
            {reviewData.img_url && (
              <ReviewImgBox>
                <ReviewImg src={reviewData.img_url} alt="reviewImg" />
              </ReviewImgBox>
            )}
          </ReviewImgBox>
          <ReviewContent>{reviewData.content}</ReviewContent>
          <ProfileBox>
            <ProfileInfo>
              <ImgWrapper>
                <ProfileImg src={volunteerData.img_url || `/assets/imgs/no-img-person.svg`} alt="profileImg" />
              </ImgWrapper>
              <NickName>{volunteerData.nickname}</NickName>
              <GloveImg src={`/assets/imgs/mitten-${volunteerData?.tier?.toLowerCase()}.svg`} alt="tierGlove" />
            </ProfileInfo>
            <OtherButton
              label="프로필 확인하기"
              width="221px"
              height="53px"
              fontSize={theme.fontSize.eighthSize}
              fontWeight="600"
              onClick={() => {
                navigate(`/profile/${volunteerData.volunteer_id}`);
              }}
            />
          </ProfileBox>
        </ScrollSection>
      </ModalContentWrapper>
    </Modal>
  );
};

export default ReviewReadModal;

// const ReviewReadModal = () => {
//   return (
//     <>
//       <p>하하하</p>
//     </>
//   );
// };

// export default ReviewReadModal;
