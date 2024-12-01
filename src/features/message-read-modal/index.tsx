import Modal from '@/components/modal';
import {
  CreatedAt,
  GloveImg,
  ImgWrapper,
  MessageContent,
  MessageTitle,
  MessageTitleBox,
  ModalContentWrapper,
  NickName,
  ProfileBox,
  ProfileImg,
  ProfileInfo,
  ScrollSection
} from './indexCss';
import { OtherButton } from '@/components/button';
import theme from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

interface NoteModalProps {
  handleModalClose: () => void;
}

const MessageReadModal: React.FC<NoteModalProps> = ({ handleModalClose }) => {
  const navigate = useNavigate();

  return (
    <Modal variant="small" isOpen onClose={handleModalClose}>
      <ModalContentWrapper>
        <ScrollSection>
          {' '}
          <MessageTitleBox>
            <MessageTitle>쪽지 제목</MessageTitle>
            <CreatedAt>24.11.27</CreatedAt>
          </MessageTitleBox>
          <MessageContent>
            본문내용Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde doloribus, praesentium eius
            numquam, iusto iste laborum porro cumque repudiandae optio nisi earum repellat neque sint placeat molestias
            excepturi tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde doloribus,
            praesentium eius numquam, iusto iste laborum porro cumque repudiandae optio nisi earum repellat neque sint
            placeat molestias excepturi tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde
            doloribus, praesentium eius numquam, iusto iste laborum porro cumque repudiandae optio nisi earum repellat
            neque sint placeat molestias excepturi tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque unde doloribus, praesentium eius numquam, iusto iste laborum porro cumque repudiandae optio nisi earum
            repellat neque sint placeat molestias excepturi tempora.
          </MessageContent>
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
              onClick={() => {
                navigate(`/profile/1`);
              }}
            />
          </ProfileBox>
        </ScrollSection>
      </ModalContentWrapper>
    </Modal>
  );
};

export default MessageReadModal;
