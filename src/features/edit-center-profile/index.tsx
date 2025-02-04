import ImageUploader from './_components/image-uploader';
import EditProfileForm from './_components/profile-edit-form/index';
import {
  CenterProfileEditContainer,
  CenterProfileTitle,
  FormSection,
  ProfileEditWrapper,
  ProfileImgEditButton,
  ProfileSection
} from './indexCss';
import useEditCenterProfile from './logic/useEditCenterProfile';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';

interface EditCenterProfileProps {
  data?: centerProfileType;
}

const EditCenterProfile = ({ data }: EditCenterProfileProps) => {
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
    validPhone,
    handleEditProfile,
    isSubmitting
  } = useEditCenterProfile({ data });

  return (
    <CenterProfileEditContainer>
      {originalName === '' ? (
        <CenterProfileTitle>프로필을 완성해보세요!!</CenterProfileTitle>
      ) : (
        <CenterProfileTitle>안녕하세요, {originalName}님!</CenterProfileTitle>
      )}
      <div>
        <ProfileEditWrapper>
          {!data ? (
            <ProfileSection className="noData">
              <div>프로필을 불러올 수 없습니다.</div>
            </ProfileSection>
          ) : (
            <>
              <ProfileSection>
                <ImageUploader
                  preview={preview || null}
                  initialImage={
                    preview ? URL.createObjectURL(preview) : data.img_url || '/assets/imgs/no-img-person.svg'
                  }
                  onImageUpload={handleImageUpload}
                />
                <ProfileImgEditButton label="수정하기" type="blue" onClick={() => console.log('프로필이미지 수정')} />
              </ProfileSection>
              <FormSection>
                <EditProfileForm
                  handleNameChange={handleNameChange}
                  handlePhoneChange={handlePhoneChange}
                  handleURLChange={handleURLChange}
                  handleIntroductionChange={handleIntroductionChange}
                  centerName={centerName}
                  centerPhone={centerPhone}
                  centerURL={centerURL}
                  validPhone={validPhone}
                  centerIntroduction={centerIntroduction}
                  handleEditProfile={handleEditProfile}
                  isSubmitting={isSubmitting}
                />
              </FormSection>
            </>
          )}
        </ProfileEditWrapper>
      </div>
    </CenterProfileEditContainer>
  );
};

export default EditCenterProfile;
