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

interface ApplicantListItemProps {
  volunteerId: number;
  name: string;
  nickName: string;
  email: string;
  img_url: string;
  status: string;
  created_at: string;
}

const ApplicantListItem: React.FC<ApplicantListItemProps> = ({
  volunteerId,
  name,
  nickName,
  email,
  status,
  img_url
}) => {
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
              <ProfileImg src={img_url} alt="프로필이미지들어갈자리" />
            </ProfileImgWrapper>
            <ProfileInfoWrapper>
              <SimpleProfile>
                <Name>
                  {name} ({nickName})
                </Name>
                <Email>{email}</Email>
              </SimpleProfile>
              <Status>{status}</Status>
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
        <ApplicantDetailModal handleOpenDetailProfileModal={handleOpenDetailProfileModal} volunteerId={volunteerId} />
      )}
    </>
  );
};

export default ApplicantListItem;
