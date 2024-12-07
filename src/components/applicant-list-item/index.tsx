import theme from '@/styles/theme';
import { OtherButton } from '../button';
import {
  ApplicantListItemWrapper,
  ButtonGroup,
  Email,
  EmptyButton,
  Name,
  ProfileBox,
  ProfileImg,
  ProfileImgWrapper,
  ProfileInfoWrapper,
  ProfileWrapper,
  RejectButton,
  SimpleProfile,
  Status
} from './indexCss';
import { useState } from 'react';
import ApplicantDetailModal from '@/features/applicant-detail-modal';
import type { VolunteerApply } from '@/store/queries/aidreq-detail-center/useApplicant';

interface ApplicantListItemProps {
  applicant: VolunteerApply;
}

const ApplicantListItem = ({ applicant }: ApplicantListItemProps) => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);

  // 모달 open, close 함수
  const handleOpenDetailProfileModal = () => {
    setIsOpenDetailModal(!isOpenDetailModal);
  };

  // TODO: 수락/반려 버튼 클릭 핸들러 함수 구현 -> 수락/반려 api fetching할 때 volunteerId 사용

  return (
    <>
      <ApplicantListItemWrapper>
        <ProfileWrapper>
          <ProfileBox>
            <ProfileImgWrapper>
              <ProfileImg
                src={applicant.volunteer.img_url || '/assets/imgs/no-img-person.svg'}
                alt="프로필이미지들어갈자리"
              />
            </ProfileImgWrapper>
            <ProfileInfoWrapper>
              <SimpleProfile>
                <Name>
                  {applicant.volunteer.name} ({applicant.volunteer.nickname})
                </Name>
                <Email>{applicant.volunteer.email}</Email>
              </SimpleProfile>
              <Status>{applicant.status}</Status>
            </ProfileInfoWrapper>
          </ProfileBox>

          <EmptyButton onClick={handleOpenDetailProfileModal}>상세 프로필 정보</EmptyButton>
        </ProfileWrapper>

        <ButtonGroup>
          <RejectButton>반려하기</RejectButton>
          <OtherButton
            label="수락하기"
            width="163px"
            height="48px"
            fontSize={theme.fontSize.eighthSize}
            fontWeight="600"
          />
        </ButtonGroup>
      </ApplicantListItemWrapper>
      {isOpenDetailModal && (
        <ApplicantDetailModal
          handleOpenDetailProfileModal={handleOpenDetailProfileModal}
          applicantId={applicant.volunteer.id}
        />
      )}
    </>
  );
};

export default ApplicantListItem;
