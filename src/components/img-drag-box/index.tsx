import React, { useCallback, useState } from 'react';

import { UploadBoxContainer } from './indexCss';

interface UploadBoxProps {
  onFileSelect: (files: File[]) => void;
}

const UploadBox: React.FC<UploadBoxProps> = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);

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

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      const imageFiles = files.filter((file) => file.type.startsWith('image/'));

      if (imageFiles.length > 0) {
        onFileSelect(imageFiles);
      }
    },
    [onFileSelect]
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageFiles = files.filter((file) => file.type.startsWith('image/'));

      if (imageFiles.length > 0) {
        onFileSelect(imageFiles);
      }
    }
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
      <label htmlFor="fileInput">
        <div>
          <p>이미지를 드래그하거나 클릭하여 업로드하세요</p>
          <p>지원 형식: JPG, PNG, GIF</p>
        </div>
      </label>
    </UploadBoxContainer>
  );
};

export default UploadBox;
