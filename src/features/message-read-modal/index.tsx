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
import { useApplicantDetail, useMessageDetail } from '@/store/queries/center-mypage/useMessage';
import useDateFormat from '@/shared/hooks/useDateFormat';

interface NoteModalProps {
  handleModalClose: () => void;
  noteId: number;
  type?: 'center' | 'volunteer';
}

const MessageReadModal: React.FC<NoteModalProps> = ({ handleModalClose, noteId, type = 'center' }) => {
  const navigate = useNavigate();
  const { formatDateTime } = useDateFormat();
  const { data: messageDetail, isLoading: isMessageLoading } = useMessageDetail(noteId, type);
  const { data: profileDetail, isLoading: isProfileLoading } = useApplicantDetail(messageDetail?.sender_id);

  if (isMessageLoading || isProfileLoading) {
    return <div>로딩 중...</div>;
  }

  if (!messageDetail) {
    return null;
  }

  console.log('noteId:', noteId);
  console.log('messageDetail:', messageDetail);
  console.log('profileDetail:', profileDetail);
  console.log('sss', profileDetail?.data.tier?.toLowerCase());

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
              <NickName>{profileDetail?.data?.nickname || messageDetail.sender_name}</NickName>
              {type === 'center' ? (
                <GloveImg
                  src={`/assets/imgs/mitten-${profileDetail?.data.tier.toLowerCase() || 'RED'}.svg`}
                  alt="tierGlove"
                />
              ) : (
                ''
              )}
            </ProfileInfo>
            <OtherButton
              label="프로필 확인하기"
              width="221px"
              height="53px"
              fontSize={theme.fontSize.eighthSize}
              fontWeight="600"
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
