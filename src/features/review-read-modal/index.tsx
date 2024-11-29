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

interface ReviewModalProps {
  handleReviewModal: () => void;
}

const ReviewReadModal: React.FC<ReviewModalProps> = ({ handleReviewModal }) => {
  return (
    <Modal variant="big" isOpen onClose={handleReviewModal}>
      <ModalContentWrapper>
        <ScrollSection>
          <ReviewTitleBox>
            <ReviewTitle>리뷰 제목</ReviewTitle>
            <CreatedAt>24.11.27</CreatedAt>
          </ReviewTitleBox>
          <ReviewImgBox>
            <ReviewImg
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQL6Ep6EVRL41xNfUA0RONFqk9ghKvHVKyWJRGucLFACYTLXcOaZRodWPuCfnq0UKFRJLE3Thl0532w0TvBijTPxef4dd23o33TYvM38w"
              alt="reviewImg"
            />
          </ReviewImgBox>
          <ReviewContent>
            서울도서관은 아주 유명한 Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, consequuntur animi.
            Architecto pariatur sapiente excepturi dolore ad natus, deleniti obcaecati quos. Aspernatur, delectus animi!
            Minima ullam sit molestias ipsam harum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
            consequuntur animi. Architecto pariatur sapiente excepturi dolore ad natus, deleniti obcaecati quos.
            Aspernatur, delectus animi! Minima ullam sit molestias ipsam harum.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At, consequuntur animi. Architecto pariatur sapiente excepturi dolore ad natus, deleniti
            obcaecati quos. Aspernatur, delectus animi! Minima ullam sit molestias ipsam harum.Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. At, consequuntur animi. Architecto pariatur sapiente excepturi dolore ad
            natus, deleniti obcaecati quos. Aspernatur, delectus animi! Minima ullam sit molestias ipsam harum.Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At, consequuntur animi. Architecto pariatur sapiente
            excepturi dolore ad natus, deleniti obcaecati quos. Aspernatur, delectus animi! Minima ullam sit molestias
            ipsam harum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, consequuntur animi. Architecto
            pariatur sapiente excepturi dolore ad natus, deleniti obcaecati quos. Aspernatur, delectus animi! Minima
            ullam sit molestias ipsam harum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, consequuntur
            animi. Architecto pariatur sapiente excepturi dolore ad natus, deleniti obcaecati quos. Aspernatur, delectus
            animi! Minima ullam sit molestias ipsam harum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
            consequuntur animi. Architecto pariatur sapiente excepturi dolore ad natus, deleniti obcaecati quos.
            Aspernatur, delectus animi! Minima ullam sit molestias ipsam harum.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At, consequuntur animi. Architecto pariatur sapiente excepturi dolore ad natus, deleniti
            obcaecati quos. Aspernatur, delectus animi! Minima ullam sit molestias ipsam harum.
          </ReviewContent>
          <ProfileBox>
            <ProfileInfo>
              <ImgWrapper>
                <ProfileImg src="/public/assets/imgs/naver-logo.svg" alt="profileImg" />
              </ImgWrapper>
              <NickName>710minjoon</NickName>
              <GloveImg src="/public/assets/imgs/interest-button.svg" alt="tierGlove" />
            </ProfileInfo>
            <OtherButton
              label="프로필 확인하기"
              width="221px"
              height="53px"
              fontSize={theme.fontSize.eighthSize}
              fontWeight="600"
            />
          </ProfileBox>
        </ScrollSection>
      </ModalContentWrapper>
    </Modal>
  );
};

export default ReviewReadModal;
