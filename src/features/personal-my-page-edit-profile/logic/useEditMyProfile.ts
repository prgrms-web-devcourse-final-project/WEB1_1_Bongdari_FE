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
  const [nickname, setNickname] = useState<string>(profileNickname ?? '');
  const [descripton, setDescripton] = useState<string>(profileDescription ?? '');

  // 프로필 수정 버튼 클릭시 실행
  const onClickEditMyProfile = async () => {
    try {
      const changeProfileData = {
        nickname: nickname,
        introduce: descripton
      };

      // 게시글 수정
      const data = await putMyProfile(changeProfileData, img);
      console.log('Put success:', data);
    } catch (error) {
      console.error('Put error:', error);
    }
  };

  return { setImg, setNickname, setDescripton, onClickEditMyProfile };
};
