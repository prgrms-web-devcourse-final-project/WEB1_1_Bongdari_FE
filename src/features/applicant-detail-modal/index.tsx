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
import useApplicantDetail from '@/store/queries/aidreq-detail-admin-query/useApplicantDetail';

interface ApplicantDetailModalProps {
  handleOpenDetailProfileModal: () => void;
  applicantId: string;
}
const ApplicantDetailModal: React.FC<ApplicantDetailModalProps> = ({ handleOpenDetailProfileModal, applicantId }) => {
  const { data: applicantDetail, isLoading, error } = useApplicantDetail(applicantId);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!applicantDetail) return <div>데이터가 없습니다</div>;

  return (
    <Modal isOpen onClose={handleOpenDetailProfileModal} variant="small">
      <ModalWrapper>
        <ScrollSection>
          <GridBox>
            <GridSection1>
              <Title>{applicantDetail.detail.name} 님의 상세프로필</Title>
              <SimpleProfileList>
                <SimpleItem>
                  <Key>닉네임</Key>
                  <Value>{applicantDetail.nickname}</Value>
                </SimpleItem>
                <SimpleItem>
                  <Key>총 봉사 시간</Key>
                  <Value>{applicantDetail.total_volunteer_hours}시간</Value>
                </SimpleItem>
                <SimpleItem>
                  <Key>총 봉사 횟수</Key>
                  <Value>{applicantDetail.total_volunteer_count}회</Value>
                </SimpleItem>
                <SimpleItem>
                  <Key>등급</Key>
                  <Tier src={`/assets/imgs/mitten-${applicantDetail.tier.toLowerCase()}.svg`} alt="tier" />
                </SimpleItem>
              </SimpleProfileList>
            </GridSection1>
            <GridSection2>
              <div>
                <ProfileImg src={applicantDetail.img_url || '/assets/imgs/no-img-person.svg'} alt="profile_img" />
              </div>
            </GridSection2>
            <GridSection3>
              <Key>설명</Key>
              <Value>{applicantDetail.introduce}</Value>
            </GridSection3>
          </GridBox>

          <SectionBox>
            <DetailItem>
              <Key>이름</Key>
              <Value>{applicantDetail.detail.name}</Value>
            </DetailItem>
            <DetailItem>
              <Key>성별</Key>
              <Value>{applicantDetail.detail.gender === 'MALE' ? '남자' : '여자'}</Value>
            </DetailItem>
            <DetailItem>
              <Key>전화번호</Key>
              <Value>{applicantDetail.detail.contact_number}</Value>
            </DetailItem>
          </SectionBox>
        </ScrollSection>
      </ModalWrapper>
    </Modal>
  );
};

export default ApplicantDetailModal;
