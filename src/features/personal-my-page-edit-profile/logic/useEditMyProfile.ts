import { useState } from 'react';
import { putMyProfile } from './putMyProfile';

interface useEditMyyProfileReturn {
  setImg: (file: File) => void;
  setNickname: (text: string) => void;
  setDescripton: (text: string) => void;
  onClickEditMyProfile: () => void;
}
export const useEditMyProfile = ({
  profileNickname,
  profileDescription
}: {
  profileNickname?: string;
  profileDescription?: string;
}): useEditMyyProfileReturn => {
  const [img, setImg] = useState<File>();
  const [nickName, setNickname] = useState<string>(profileNickname ?? '');
  const [descripton, setDescripton] = useState<string>(profileDescription ?? '');

  // 프로필 수정 버튼 클릭시 실행
  const onClickEditMyProfile = async () => {
    try {
      const jsonPayload = {
        nickName: nickName,
        introduce: descripton
      };

      // data 필드에 JSON 추가
      const formData = new FormData();
      formData.append('data', JSON.stringify(jsonPayload));

      if (img && img instanceof File) {
        formData.append('img_file', img);
      }

      // formData 콘솔에 찍기
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value instanceof File ? 'File object' : value);
      }

      // 게시글 수정
      const data = await putMyProfile(formData);
      console.log('Put success:', data);
    } catch (error) {
      console.error('Put error:', error);
    }
  };

  return { setImg, setNickname, setDescripton, onClickEditMyProfile };
};
