import Modal from '@/components/modal';
import {
  CreatedAt,
  DetailPageButton,
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
  ScrollSection,
  TitleWrapper
} from './indexCss';
import { useNavigate } from 'react-router-dom';
import useDateFormat from '@/shared/hooks/useDateFormat';
import { useFindReview } from './logic/useFindReview';
import SanitizedContent from '@/components/sanitized-content';
import { useLoginStore } from '@/store/stores/login/loginStore';

interface ReviewModalProps {
  handleCloseReviewModal: () => void;
  reviewId: number;
  isCenterReview?: boolean;
}

const ReviewReadModal = ({ handleCloseReviewModal, reviewId, isCenterReview = true }: ReviewModalProps) => {
  const { reviewData, volunteerData } = useFindReview({ isCenterReview, reviewId });
  const { formatDate } = useDateFormat();
  const navigate = useNavigate();
  const roleType = useLoginStore((state) => state.loginType);
  // const { loginType: roleType, myRoleId: volunteerId } = useLoginStore();

  if (!reviewData) return null;

  const handleDetailPageButtonClick = () => {
    const detailPathAsRoleType =
      roleType === 'ROLE_CENTER'
        ? `/mypage/adminaidreqlist/${reviewData.recruit_board_id}`
        : `/aidrqdetail/${reviewData.recruit_board_id}`;

    navigate(detailPathAsRoleType);
  };

  return (
    <Modal variant="big" isOpen onClose={handleCloseReviewModal}>
      <ModalContentWrapper>
        <ScrollSection>
          <TitleWrapper>
            <ReviewTitleBox>
              <ReviewTitle>{reviewData?.title}</ReviewTitle>
              <CreatedAt>{formatDate(reviewData?.created_at)}</CreatedAt>
            </ReviewTitleBox>
            <DetailPageButton label="모집글 확인하기" type="white" onClick={handleDetailPageButtonClick} />
          </TitleWrapper>
          <ReviewImgBox>
            {reviewData?.img_url && (
              <ReviewImgBox>
                <ReviewImg src={reviewData?.img_url} alt="reviewImg" />
              </ReviewImgBox>
            )}
          </ReviewImgBox>
          <ReviewContent>
            <SanitizedContent content={reviewData?.content} />
          </ReviewContent>
          {roleType === 'ROLE_CENTER' && (
            <ProfileBox>
              <ProfileInfo>
                <ImgWrapper>
                  <ProfileImg src={volunteerData?.img_url || `/assets/imgs/no-img-person.svg`} alt="profileImg" />
                </ImgWrapper>
                <NickName>{volunteerData?.nickname}</NickName>
                {volunteerData?.tier && (
                  <GloveImg src={`/assets/imgs/mitten-${volunteerData.tier.toLowerCase()}.svg`} alt="tierGlove" />
                )}
              </ProfileInfo>
              <GoToProfileButton
                label="프로필 확인하기"
                type="blue"
                onClick={() => {
                  navigate(`/profile/${reviewData.volunteer_id}`);
                }}
              />
            </ProfileBox>
          )}
        </ScrollSection>
      </ModalContentWrapper>
    </Modal>
  );
};

export default ReviewReadModal;
