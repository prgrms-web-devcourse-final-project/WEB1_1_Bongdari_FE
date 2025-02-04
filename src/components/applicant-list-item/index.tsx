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
  Status,
  ApproveButton
} from './indexCss';
import { useState } from 'react';
import ApplicantDetailModal from '@/features/applicant-detail-modal';
import { useApproveApplyment, useRejectApplyment } from '@/store/queries/aidreq-detail-admin-query/useManageApplyment';
import { useAlertDialog, useConfirmDialog } from '@/store/stores/dialog/dialogStore';
import { VolunteerApply } from '@/shared/types/aidrq-volunteer-list/volunteerListType';

interface ApplicantListItemProps {
  applicant: VolunteerApply;
  recruitStatus: string;
}

const ApplicantListItem = ({ applicant, recruitStatus }: ApplicantListItemProps) => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const { openConfirm } = useConfirmDialog();
  const { openAlert } = useAlertDialog();

  const applymentId = applicant.id;

  const { mutate: approve } = useApproveApplyment();
  const { mutate: reject } = useRejectApplyment();

  const handleOpenDetailProfileModal = () => {
    setIsOpenDetailModal(!isOpenDetailModal);
  };

  const handleRejectApplyment = () => {
    openConfirm(
      `${applicant.volunteer.name}님의 지원을 반려하시겠습니까? 반려 후에도 수락하기로 변경할 수 있습니다.`,
      async () => {
        try {
          await reject(applymentId);
          openAlert(`${applicant.volunteer.name}님의 지원이 반려되었습니다.`);
        } catch (error) {
          openAlert('반려 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
          console.error('반려 처리 중 오류가 발생했습니다.', error);
        }
      }
    );
  };
  const handleApproveApplyment = () => {
    openConfirm(
      `${applicant.volunteer.name}님의 지원을 수락하시겠습니까? 수락 후에도 반려하기로 변경할 수 있습니다.`,
      async () => {
        try {
          await approve(applymentId);
          openAlert(`${applicant.volunteer.name}님의 지원이 성공적으로 수락되었습니다.`);
        } catch (error) {
          openAlert('수락 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
          console.error('수락 처리 중 오류가 발생했습니다. 다시 시도해주세요.', error);
        }
      }
    );
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
                <Email>{applicant.volunteer.contact_number}</Email>
              </SimpleProfile>
              <Status>{applicant.status}</Status>
            </ProfileInfoWrapper>
          </ProfileBox>

          <EmptyButton
            onClick={handleOpenDetailProfileModal}
            label="상세 프로필 정보"
            type="white"
            disabled={false}></EmptyButton>
        </ProfileWrapper>

        <ButtonGroup>
          <RejectButton
            onClick={handleRejectApplyment}
            label="반려하기"
            type="white"
            disabled={recruitStatus === 'COMPLETED' || applicant.status === 'REJECTED'}></RejectButton>
          <ApproveButton
            label="수락하기"
            onClick={handleApproveApplyment}
            type="blue"
            disabled={recruitStatus === 'COMPLETED' || applicant.status === 'APPROVED'}
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
