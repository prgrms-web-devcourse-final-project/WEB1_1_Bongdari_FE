import type { ChangeEvent } from 'react';
import { HiddenInput, ImageCircle, PreviewImage, UploadButton, UploadContainer } from './indexCss';

interface ImageUploadProps {
  preview: File | null;
  initialImage: string;
  onImageUpload: (file: File) => void;
}

const ImageUploader = ({ preview, initialImage, onImageUpload }: ImageUploadProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const imageSource = preview ? URL.createObjectURL(preview) : initialImage || '/assets/imgs/no-img-person.svg';

  return (
    <UploadContainer>
      <ImageCircle>
        <PreviewImage src={imageSource} alt={preview ? 'Preview' : initialImage ? 'Initial profile' : 'No image'} />
      </ImageCircle>
      <UploadButton>
        <HiddenInput type="file" accept="image/*" onChange={handleFileChange} />
        <span>+</span>
      </UploadButton>
    </UploadContainer>
  );
};

export default ImageUploader;
