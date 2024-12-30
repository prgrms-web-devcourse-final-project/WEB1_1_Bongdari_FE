import { useState, useEffect } from 'react';

const useImagePreview = () => {
  const [previewImg, setPreviewImg] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      previewImg.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewImg]);

  const createPreviewImg = (files: File[]) => {
    const newPreviewImg = files.map((file) => URL.createObjectURL(file));
    setPreviewImg((prev) => {
      prev.forEach((url) => URL.revokeObjectURL(url));
      return newPreviewImg;
    });
  };

  const clearPreviewImg = () => {
    previewImg.forEach((url) => URL.revokeObjectURL(url));
    setPreviewImg([]);
  };

  return { previewImg, createPreviewImg, clearPreviewImg };
};

export default useImagePreview;
