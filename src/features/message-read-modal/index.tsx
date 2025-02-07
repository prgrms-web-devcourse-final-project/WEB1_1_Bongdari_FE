import Modal from '@/components/modal';
import {
  CreatedAt,
  GloveImg,
  GoToProfileButton,
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
import { useNavigate } from 'react-router-dom';
import { useApplicantDetail, useMessageDetail } from '@/store/queries/center-mypage/useMessage';
import useDateFormat from '@/shared/hooks/useDateFormat';

interface NoteModalProps {
  handleModalClose: () => void;
  noteId: number;
  type?: 'center' | 'volunteer';
}

const MessageReadModal = ({ handleModalClose, noteId, type = 'center' }: NoteModalProps) => {
  const navigate = useNavigate();
  const { formatDateTime } = useDateFormat();
  const { data: messageDetail, isLoading: isMessageLoading } = useMessageDetail(noteId, type);
  const { data: profileDetail, isLoading: isProfileLoading } = useApplicantDetail(messageDetail?.sender_id);

  console.log('메세지디테일', messageDetail);
  console.log('프로필디테일', profileDetail);

  if (isMessageLoading || isProfileLoading) {
    return <div>로딩 중...</div>;
  }

  if (!messageDetail) {
    return null;
  }

  return (
    <Modal variant="small" isOpen onClose={handleModalClose}>
      <ModalContentWrapper>
        <ScrollSection>
          <MessageTitleBox>
            <MessageTitle>{messageDetail.title}</MessageTitle>
            <CreatedAt>{formatDateTime(messageDetail.created_at)}</CreatedAt>
          </MessageTitleBox>
          <MessageContent>{messageDetail.content}</MessageContent>
          <ProfileBox>
            <ProfileInfo>
              <ImgWrapper>
                <ProfileImg
                  src={messageDetail.sender_profile_img_link || '/assets/imgs/no-img-person.svg'}
                  alt="profileImg"
                />
              </ImgWrapper>
              <NickName>{profileDetail?.nickname || messageDetail.sender_name}</NickName>
              {type === 'center' ? (
                <GloveImg src={`/assets/imgs/mitten-${profileDetail?.tier.toLowerCase()}.svg`} alt="tierGlove" />
              ) : (
                ''
              )}
            </ProfileInfo>
            <GoToProfileButton
              label="프로필 확인하기"
              type="blue"
              onClick={() => {
                if (type === 'center') navigate(`/profile/${messageDetail.sender_id}`);
                else navigate(`/centerprofile/${messageDetail.sender_id}`);
              }}
            />
          </ProfileBox>
        </ScrollSection>
      </ModalContentWrapper>
    </Modal>
  );
};

export default MessageReadModal;
