import React, { useCallback, useState } from 'react';

import { UploadBoxContainer } from './indexCss';

interface UploadBoxProps {
  onFileSelect: (files: File[]) => void;
}

const UploadBox: React.FC<UploadBoxProps> = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const handleImageFile = (file: File) => {
    const previewImgURL = URL.createObjectURL(file);
    setPreviewImg(previewImgURL);
    onFileSelect([file]);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      const imageFile = files.find((file) => file.type.startsWith('image/'));

      if (imageFile) {
        handleImageFile(imageFile);
      }
    },
    [onFileSelect]
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        handleImageFile(file);
      }
    }
  };

  // 이미지 미리보기로 업로드 했는데 다른 사진으로 변경하고 싶을 경우
  // 다시 이미지 부분 클릭하여 파일 추가할 수 있도록
  const handleChangeImage = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <UploadBoxContainer
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      isDragging={isDragging}>
      <input
        type="file"
        id="fileInput"
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      {previewImg ? (
        <div onClick={handleChangeImage}>
          <img src={previewImg} alt="미리보기 이미지" />
          <p>클릭 또는 드래그하여 이미지 변경</p>
        </div>
      ) : (
        <label htmlFor="fileInput">
          <div>
            <p>이미지를 드래그하거나 클릭하여 업로드하세요</p>
            <p>지원 형식: JPG, PNG, GIF</p>
          </div>
        </label>
      )}
    </UploadBoxContainer>
  );
};

export default UploadBox;
