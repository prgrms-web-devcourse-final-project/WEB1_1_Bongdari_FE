import { type ChangeEvent } from 'react';
import { HiddenInput, ImageCircle, PreviewImage, UploadButton, UploadContainer } from './indexCss';

interface ImageUploadProps {
  preview: string | null;
  onImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

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
