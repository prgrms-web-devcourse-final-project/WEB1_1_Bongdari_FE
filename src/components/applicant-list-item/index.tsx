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
import { useApproveApplyment, useRejectApplyment } from '@/store/queries/aidreq-detail-center/useManageApplyment';

interface ApplicantListItemProps {
  applicant: VolunteerApply;
  recruitStatus: string;
}

const ApplicantListItem = ({ applicant, recruitStatus }: ApplicantListItemProps) => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);

  console.log('applicant(얜 아이템)', applicant);
  const applymentId = applicant.id;

  const { mutate: approve } = useApproveApplyment();
  const { mutate: reject } = useRejectApplyment();

  const handleOpenDetailProfileModal = () => {
    setIsOpenDetailModal(!isOpenDetailModal);
  };

  const handleRejectApplyment = () => {
    reject(applymentId);
  };

  const handleApproveApplyment = () => {
    approve(applymentId);
  };

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
          <RejectButton onClick={handleRejectApplyment} disabled={recruitStatus === 'COMPLETED'}>
            반려하기
          </RejectButton>
          <OtherButton
            label="수락하기"
            width="163px"
            height="48px"
            fontSize={theme.fontSize.eighthSize}
            fontWeight="600"
            onClick={handleApproveApplyment}
            disabled={recruitStatus === 'COMPLETED'}
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
