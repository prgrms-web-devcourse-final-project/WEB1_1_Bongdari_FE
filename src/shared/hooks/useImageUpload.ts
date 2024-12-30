// // 이 훅은 프로필 이미지 업로드 (단일 이미지만) 사용자 정의 훅입니다!
// // 여러 이미지를 올리려면 useImagesUpload 훅으로 따로 만들어 주세요
import { useState, type ChangeEvent } from 'react';

export const useImageUpload = () => {
  const [preview, setPreview] = useState<string | ''>('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImageFile(file);

      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  return {
    preview,
    imageFile,
    setPreview,
    handleImageUpload
  };
};
