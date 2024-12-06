import { OtherButton } from '@/components/button';
import ImageUploader from './_components/image-uploader';
import EditProfileForm from './_components/profile-edit-form/index';
import {
  CenterProfileEditContainer,
  CenterProfileTitle,
  EditButtonContainer,
  ProfileEditWrapper,
  SectionBox
} from './indexCss';
import useEditCenterProfile from './logic/useEditCenterProfile';
import useSubmitCenterProfile from './logic/useSubmitCenterProfile';
import type { centerProfileType } from '@/shared/types/center-profile/centerProfile';

interface EditCenterProfileProps {
  profileData: centerProfileType;
}

const EditCenterProfile = ({ profileData }: EditCenterProfileProps) => {
  const {
    preview,
    handleImageUpload,
    centerName,
    originalName,
    centerPhone,
    centerURL,
    centerIntroduction,
    handleNameChange,
    handlePhoneChange,
    handleURLChange,
    handleIntroductionChange,
    validURL,
    validPhone
  } = useEditCenterProfile({ profileData });

  const { handleEditProfile, isSubmitting } = useSubmitCenterProfile();

  const handleEditButton = () => {
    if (!centerName.trim()) {
      alert('기관명을 입력해주세요.');
      return;
    }
    handleEditProfile(centerName, centerPhone, centerURL, centerIntroduction, preview, validURL, validPhone);
  };

  return (
    <CenterProfileEditContainer>
      {originalName === '' ? (
        <CenterProfileTitle>프로필을 완성해보세요!!</CenterProfileTitle>
      ) : (
        <CenterProfileTitle>안녕하세요, {originalName}님!</CenterProfileTitle>
      )}
      <SectionBox>
        <ProfileEditWrapper>
          <ImageUploader preview={preview} onImageUpload={handleImageUpload} />
          <EditProfileForm
            handleNameChange={handleNameChange}
            handlePhoneChange={handlePhoneChange}
            handleURLChange={handleURLChange}
            handleIntroductionChange={handleIntroductionChange}
            centerName={centerName}
            centerPhone={centerPhone}
            centerURL={centerURL}
            validURL={validURL}
            validPhone={validPhone}
            centerIntroduction={centerIntroduction}
          />
        </ProfileEditWrapper>
        <EditButtonContainer>
          <OtherButton
            label="수정하기"
            width="220px"
            onClick={handleEditButton}
            disabled={isSubmitting || !validURL || !validPhone || !centerName.trim()}
          />
        </EditButtonContainer>
      </SectionBox>
    </CenterProfileEditContainer>
  );
};

export default EditCenterProfile;
