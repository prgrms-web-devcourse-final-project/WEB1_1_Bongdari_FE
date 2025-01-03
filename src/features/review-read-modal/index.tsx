import Modal from '@/components/modal';
import {
  CreatedAt,
  GloveImg,
  GoToProfileButton,
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
import { useNavigate } from 'react-router-dom';
import useDateFormat from '@/shared/hooks/useDateFormat';
import { useGetReviewById } from '@/store/queries/center-mypage/useReview';
import { usePersonProfileQuery } from '@/store/queries/volunteer-profile/useFetchPersonProfile';

interface ReviewModalProps {
  handleCloseReviewModal: () => void;
  reviewId: number;
}

const ReviewReadModal = ({ handleCloseReviewModal, reviewId }: ReviewModalProps) => {
  const navigate = useNavigate();
  const { formatDate } = useDateFormat();
  const { data: reviewData, isLoading: isReviewLoading } = useGetReviewById(reviewId);
  const { data: volunteerData, isLoading: isVolunteerLoading } = usePersonProfileQuery(reviewData?.volunteer_id);

  if (isReviewLoading || isVolunteerLoading) return <div>로딩중...</div>;
  if (!reviewData || !volunteerData) return null;

  // console.log('reviewData', reviewData);
  // console.log('volunteerData', volunteerData);

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
            <GoToProfileButton
              label="프로필 확인하기"
              type="blue"
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
