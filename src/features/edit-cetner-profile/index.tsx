import { OtherButton } from '@/components/button';
import ImageUploader from './_components/image-uploader';
import EditProfileForm from './_components/profile-edit-form/input';
import {
  CenterProfileEditContainer,
  CenterProfileTitle,
  EditButtonContainer,
  ProfileEditWrapper,
  SectionBox
} from './indexCss';

const EditCenterProfile = () => {
  return (
    <CenterProfileEditContainer>
      <CenterProfileTitle>안녕하세요, 서울 도서관님!</CenterProfileTitle>
      <SectionBox>
        <ProfileEditWrapper>
          <ImageUploader />
          <EditProfileForm />
        </ProfileEditWrapper>
        <EditButtonContainer>
          <OtherButton label="수정하기" width="220px" />
        </EditButtonContainer>
      </SectionBox>
    </CenterProfileEditContainer>
  );
};

export default EditCenterProfile;
