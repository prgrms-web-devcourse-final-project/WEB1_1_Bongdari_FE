import { usePutMyProfile } from '@/store/queries/volunteer-mypage/usePutMyProfile';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
import { useState } from 'react';

interface useEditMyyProfileReturn {
  setImg: (file: File) => void;
  setNickname: (text: string) => void;
  setDescripton: (text: string) => void;
  onClickEditMyProfile: () => void;
  description: string;
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
  const { openAlert } = useAlertDialog();

  const changeProfileData = {
    nickname: nickname,
    introduce: descripton
  };
  const { mutate } = usePutMyProfile();

  // 프로필 수정 버튼 클릭시 실행
  const onClickEditMyProfile = async () => {
    if (descripton.length > 500) {
      openAlert('자기소개는 500자를 넘을 수 없습니다.');
      return;
    }
    mutate(
      {
        changeProfileData,
        imgFile: img
      },
      {
        onSuccess: () => {
          console.log('Put success'); // 성공 시 동작
          alert('프로필 수정이 완료되었습니다!');
        },
        onError: () => {
          console.error('Put error'); // 에러 시 동작
          alert('프로필 수정 중 오류가 발생했습니다.');
        }
      }
    );
  };

  return { setImg, setNickname, setDescripton, onClickEditMyProfile, description: descripton };
};
