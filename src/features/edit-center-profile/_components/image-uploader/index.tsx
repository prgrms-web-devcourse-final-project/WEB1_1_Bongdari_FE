import { type ChangeEvent } from 'react';
import { HiddenInput, ImageCircle, PreviewImage, UploadButton, UploadContainer } from './indexCss';

interface ImageUploadProps {
  preview?: string;
  onImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

// TODO: 주영님이 이미지 올려주시면 preview === ''일 때, 기관 이미지 넣기
const ImageUploader = ({ preview, onImageUpload }: ImageUploadProps) => {
  return (
    <UploadContainer>
      <ImageCircle>{preview && <PreviewImage src={preview} alt="Preview" />}</ImageCircle>
      <UploadButton>
        <HiddenInput type="file" accept="image/*" onChange={onImageUpload} />
        <span>+</span>
      </UploadButton>
    </UploadContainer>
  );
};

export default ImageUploader;
