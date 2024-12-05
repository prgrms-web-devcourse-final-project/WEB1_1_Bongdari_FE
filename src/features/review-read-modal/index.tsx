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
import type { Review } from '@/store/queries/center-mypage/useReview';
import useDateFormat from '@/shared/hooks/useDateFormat';

interface ReviewModalProps {
  handleReviewModal: () => void;
  review: Review | null;
}

const ReviewReadModal: React.FC<ReviewModalProps> = ({ handleReviewModal, review }) => {
  const navigate = useNavigate();
  const { formatDate } = useDateFormat();
  if (!review) return null;

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
                <ProfileImg src="/public/assets/imgs/naver-logo.svg" alt="profileImg" />
              </ImgWrapper>
              <NickName>{review.volunteer_nickname}</NickName>
              <GloveImg src="/public/assets/imgs/interest-button.svg" alt="tierGlove" />
            </ProfileInfo>
            <OtherButton
              label="프로필 확인하기"
              width="221px"
              height="53px"
              fontSize={theme.fontSize.eighthSize}
              fontWeight="600"
              onClick={() => {
                navigate(`/profile/${review.volunteer_id}`);
              }}
            />
          </ProfileBox>
        </ScrollSection>
      </ModalContentWrapper>
    </Modal>
  );
};

export default ReviewReadModal;
