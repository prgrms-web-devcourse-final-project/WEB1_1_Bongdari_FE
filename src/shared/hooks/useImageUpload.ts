// // 이 훅은 프로필 이미지 업로드 (단일 이미지만) 사용자 정의 훅입니다!
// // 여러 이미지를 올리려면 useImagesUpload 훅으로 따로 만들어 주세요

// import { useState, type ChangeEvent } from 'react';

// export const useImageUpload = () => {
//   const [preview, setPreview] = useState<string | null>(null);

//   const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];

//     if (file) {
//       // 이미지 미리보기
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         // 미리보기 상태 갱신
//         setPreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return {
//     preview,
//     setPreview,
//     handleImageUpload
//   };
// };

// 수정된 useImageUpload 훅
import { useState, type ChangeEvent } from 'react';

export const useImageUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null); // 추가된 상태

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

      // 이미지 파일 상태 갱신
      setImageFile(file);
    }
  };

  return {
    preview,
    imageFile, // 파일 상태도 반환
    setPreview,
    handleImageUpload
  };
};
