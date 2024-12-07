import type { ChangeEvent } from 'react';
import { HiddenInput, ImageCircle, PreviewImage, UploadButton, UploadContainer } from './indexCss';

interface ImageUploadProps {
  preview: File | null;
  initialImage?: string;
  onImageUpload: (file: File) => void;
}

// TODO: 주영님이 이미지 올려주시면 preview === ''일 때, 기관 이미지 넣기
const ImageUploader = ({ preview, initialImage, onImageUpload }: ImageUploadProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <UploadContainer>
      <ImageCircle>
        {' '}
        {preview ? (
          // 새로 선택된 이미지가 있으면 그것을 보여줌
          <PreviewImage src={URL.createObjectURL(preview)} alt="Preview" />
        ) : (
          // 없으면 서버에서 받아온 이미지를 보여줌
          initialImage && <PreviewImage src={initialImage} alt="Current profile" />
        )}
      </ImageCircle>
      <UploadButton>
        <HiddenInput type="file" accept="image/*" onChange={handleFileChange} />
        <span>+</span>
      </UploadButton>
    </UploadContainer>
  );
};

export default ImageUploader;
