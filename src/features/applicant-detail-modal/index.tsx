import Modal from '@/components/modal';
import {
  GridBox,
  GridSection1,
  Key,
  ModalWrapper,
  ProfileImg,
  GridSection2,
  ScrollSection,
  Title,
  Value,
  GridSection3,
  SectionBox,
  DetailItem,
  Tier,
  SimpleProfileList,
  SimpleItem
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
          <GridBox>
            <GridSection1>
              <Title>홍유진 님의 상세프로필</Title>
              <SimpleProfileList>
                <SimpleItem>
                  <Key>닉네임</Key>
                  <Value>bboongbboong</Value>
                </SimpleItem>
                <SimpleItem>
                  <Key>총 봉사 시간</Key>
                  <Value>1503시간</Value>
                </SimpleItem>
                <SimpleItem>
                  <Key>총 봉사 횟수</Key>
                  <Value>200회</Value>
                </SimpleItem>
                <SimpleItem>
                  <Key>등급</Key>
                  <Tier src="/assets/imgs/mitten-white.svg" alt="tier" />
                </SimpleItem>
              </SimpleProfileList>
            </GridSection1>
            <GridSection2>
              <div>
                <ProfileImg src="/assets/imgs/mitten-white.svg" alt="profile_img" />
              </div>
            </GridSection2>
            <GridSection3>
              <Key>설명</Key>
              <Value>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eos quod aspernatur magni expedita
                alias neque, quasi tempora tempore maxime culpa earum rem facere totam quidem eveniet magnam ab et.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab quibusdam odit ipsa at?
                Corrupti iusto unde doloribus iure, consectetur autem odio sint hic, porro consequatur amet! Atque, unde
                labore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eos quod aspernatur magni
                expedita alias neque, quasi tempora tempore maxime culpa earum rem facere totam quidem eveniet magnam ab
                et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab quibusdam odit ipsa at?
                Corrupti iusto unde doloribus iure, consectetur autem odio sint hic, porro consequatur amet! Atque, unde
                labore?
              </Value>
            </GridSection3>
          </GridBox>

          <SectionBox>
            <DetailItem>
              <Key>이름</Key>
              <Value>홍유진</Value>
            </DetailItem>
            <DetailItem>
              <Key>성별</Key>
              <Value>여자</Value>
            </DetailItem>
            <DetailItem>
              <Key>생년월일</Key>
              <Value>2001.04.10</Value>
            </DetailItem>
            <DetailItem>
              <Key>전화번호</Key>
              <Value>010-3922-4828</Value>
            </DetailItem>
            <DetailItem>
              <Key>이메일</Key>
              <Value>jinnie_h@naver.com</Value>
            </DetailItem>
          </SectionBox>
        </ScrollSection>
      </ModalWrapper>
    </Modal>
  );
};

export default ApplicantDetailModal;
