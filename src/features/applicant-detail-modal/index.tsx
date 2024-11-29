import Modal from '@/components/modal';
import {
  ItemLabel,
  ItemText,
  ModalWrapper,
  ProfileTitle,
  SimpleProfileInfoBox,
  SimpleProfileList,
  ProfileListItem,
  SimpleProfileWrapper,
  DetailProfileList,
  ProfileImg,
  ProfileImgWrapper,
  Tier,
  ScrollSection,
  Introduction
} from './indexCss';

interface ApplicantDetailModalProps {
  handleOpenDetailProfileModal: () => void;
  volunteerId: number;
}
const ApplicantDetailModal: React.FC<ApplicantDetailModalProps> = ({ handleOpenDetailProfileModal, volunteerId }) => {
  // TODO: 타인 상세 프로필 조회 api 붙여 작업
  return (
    <Modal isOpen onClose={handleOpenDetailProfileModal} variant="small">
      <ModalWrapper>
        <ScrollSection>
          <SimpleProfileWrapper>
            <SimpleProfileInfoBox>
              <ProfileTitle>김민준 님의 상세 프로필</ProfileTitle>
              <SimpleProfileList>
                <ProfileListItem>
                  <ItemLabel>닉네임</ItemLabel>
                  <ItemText>710minjoon</ItemText>
                </ProfileListItem>
                <ProfileListItem>
                  <ItemLabel>총 봉사 시간</ItemLabel>
                  <ItemText>1503시간</ItemText>
                </ProfileListItem>
                <ProfileListItem>
                  <ItemLabel>총 봉사 횟수</ItemLabel>
                  <ItemText>200회</ItemText>
                </ProfileListItem>
                <ProfileListItem>
                  <ItemLabel>등급</ItemLabel>
                  <Tier src="/assets/imgs/mitten-white.svg" alt="tier" />
                </ProfileListItem>
                <ProfileListItem>
                  <ItemLabel>설명</ItemLabel>
                  <Introduction>
                    해적왕이 되기 위하여 이 자리에 왔습니다. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam consectetur nostrum vitae nisi labore eveniet eius quas facere totam provident perspiciatis
                    iusto ducimus, soluta tempora perferendis, cumque dolorem itaque minus.
                  </Introduction>
                </ProfileListItem>
              </SimpleProfileList>
            </SimpleProfileInfoBox>
            <ProfileImgWrapper>
              <ProfileImg src="" alt="profile_img" />
            </ProfileImgWrapper>
          </SimpleProfileWrapper>
          <DetailProfileList>
            <ProfileListItem>
              <ItemLabel>이름</ItemLabel>
              <ItemText>김민준</ItemText>
            </ProfileListItem>
            <ProfileListItem>
              <ItemLabel>성별</ItemLabel>
              <ItemText>남자</ItemText>
            </ProfileListItem>
            <ProfileListItem>
              <ItemLabel>생년월일</ItemLabel>
              <ItemText>1997.02.05</ItemText>
            </ProfileListItem>
            <ProfileListItem>
              <ItemLabel>전화번호</ItemLabel>
              <ItemText>010-7388-8752</ItemText>
            </ProfileListItem>
            <ProfileListItem>
              <ItemLabel>이메일</ItemLabel>
              <ItemText>minjoon@naver.com</ItemText>
            </ProfileListItem>
          </DetailProfileList>
        </ScrollSection>
      </ModalWrapper>
    </Modal>
  );
};

export default ApplicantDetailModal;
