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
import { useImageUpload } from '@/shared/hooks/useImageUpload';
import { useState } from 'react';

const EditCenterProfile = () => {
  const [centerName, setCenterName] = useState<string>('');
  const { preview, handleImageUpload } = useImageUpload();

  // TODO: 다른 INPUT
  const handleInputText = (inputText: string) => {
    setCenterName(inputText);
    console.log('일단 작성', inputText);
  };

  const onChangeCenterName = (newName: string) => {
    setCenterName(newName);
  };

  return (
    <CenterProfileEditContainer>
      <CenterProfileTitle>안녕하세요, {centerName}님!</CenterProfileTitle>
      <SectionBox>
        <ProfileEditWrapper>
          <ImageUploader preview={preview} onImageUpload={handleImageUpload} />
          <EditProfileForm
            centerName={centerName}
            handleInputText={handleInputText}
            onChangeCenterName={onChangeCenterName}
          />
        </ProfileEditWrapper>
        <EditButtonContainer>
          <OtherButton label="수정하기" width="220px" />
        </EditButtonContainer>
      </SectionBox>
    </CenterProfileEditContainer>
  );
};

export default EditCenterProfile;
