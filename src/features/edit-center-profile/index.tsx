import Button from '@/components/button';
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
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';

interface EditCenterProfileProps {
  data: centerProfileType;
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
    validURL,
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
      <SectionBox>
        <ProfileEditWrapper>
          {/* <ImageUploader
            preview={preview}
            initialImage={data.img_url || '/assets/imgs/no-img-person.svg'}
            onImageUpload={handleImageUpload}
          /> */}
          <ImageUploader
            preview={preview || null} // preview가 없으면 기본 이미지 사용
            initialImage={preview ? URL.createObjectURL(preview) : data.img_url || '/assets/imgs/no-img-person.svg'}
            onImageUpload={handleImageUpload}
          />

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
          <Button
            label="수정하기"
            // width="220px"
            onClick={handleEditProfile}
            disabled={isSubmitting || !validURL || !validPhone || !centerName.trim()}
          />
        </EditButtonContainer>
      </SectionBox>
    </CenterProfileEditContainer>
  );
};

export default EditCenterProfile;
