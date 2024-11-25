import { useState, type ChangeEvent } from 'react';
import { HiddenInput, ImageCircle, PreviewImage, UploadButton, UploadContainer } from './indexCss';

const ImageUploader = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // 이미지 미리보기
      const reader = new FileReader();
      reader.onloadend = () => {
        // 미리보기 상태 갱신
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <UploadContainer>
      <ImageCircle>{preview && <PreviewImage src={preview} alt="Preview" />}</ImageCircle>
      <UploadButton>
        <HiddenInput type="file" accept="image/*" onChange={handleImageUpload} />
        <span>+</span>
      </UploadButton>
    </UploadContainer>
  );
};

export default ImageUploader;
