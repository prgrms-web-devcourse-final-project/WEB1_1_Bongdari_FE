// import { usePutMyProfile, VolunteerInfo } from '@/store/queries/volunteer-mypage/usePutMyProfile';
// import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
// import { useState } from 'react';

// interface useEditMyyProfileReturn {
//   setImg: (file: File) => void;
//   setNickname: (text: string) => void;
//   setDescripton: (text: string) => void;
//   onClickEditMyProfile: () => void;
//   description: string;
// }

// export const useEditMyProfile = ({
//   currentUserInfo,
//   profileNickname,
//   profileDescription
// }: {
//   currentUserInfo: VolunteerInfo;
//   profileNickname?: string;
//   profileDescription?: string;
// }): useEditMyyProfileReturn => {
//   const [, setImg] = useState<File>();
//   const [nickname, setNickname] = useState<string>(profileNickname ?? '');
//   const [descripton, setDescripton] = useState<string>(profileDescription ?? '');
//   const { openAlert } = useAlertDialog();

//   const { mutate } = usePutMyProfile();

//   // 프로필 수정 버튼 클릭시 실행
//   const onClickEditMyProfile = async () => {
//     if (descripton.length > 500) {
//       openAlert('자기소개는 500자를 넘을 수 없습니다.');
//       return;
//     }
//     mutate(
//       {
//         currentInfo: currentUserInfo,
//         changes: {
//           nickname: nickname,
//           introduce: descripton
//         }
//       },
//       {
//         onSuccess: () => {
//           console.log('Put success'); // 성공 시 동작
//           openAlert('프로필 수정이 완료되었습니다!');
//         },
//         onError: () => {
//           console.error('Put error'); // 에러 시 동작
//           openAlert('프로필 수정 중 오류가 발생했습니다.');
//         }
//       }
//     );
//   };

//   return { setImg, setNickname, setDescripton, onClickEditMyProfile, description: descripton };
// };

import { usePutMyProfile, VolunteerInfo } from '@/store/queries/volunteer-mypage/usePutMyProfile';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
import { useState } from 'react';
import { useUpdateProfileImage } from '@/store/queries/center-mypage/useCenterProfile';

interface useEditMyyProfileReturn {
  setImg: (file: File) => void;
  setNickname: (text: string) => void;
  setDescripton: (text: string) => void;
  onClickEditMyProfile: () => void;
  description: string;
  isUploading: boolean;
}

export const useEditMyProfile = ({
  currentUserInfo,
  profileNickname,
  profileDescription
}: {
  currentUserInfo: VolunteerInfo;
  profileNickname?: string;
  profileDescription?: string;
}): useEditMyyProfileReturn => {
  const [currentImg, setCurrentImg] = useState<File>();
  const [nickname, setNickname] = useState<string>(profileNickname ?? '');
  const [descripton, setDescripton] = useState<string>(profileDescription ?? '');
  const [isUploading, setIsUploading] = useState(false);
  const { openAlert } = useAlertDialog();

  const { mutate } = usePutMyProfile();
  const updateProfileImage = useUpdateProfileImage();

  const setImg = (file: File) => {
    setCurrentImg(file);
  };

  // 프로필 수정 버튼 클릭시 실행
  const onClickEditMyProfile = async () => {
    if (descripton.length > 500) {
      openAlert('자기소개는 500자를 넘을 수 없습니다.');
      return;
    }

    setIsUploading(true);

    try {
      // 이미지가 있으면 먼저 업로드
      if (currentImg) {
        await updateProfileImage.mutateAsync(currentImg);
      }

      // 프로필 정보 업데이트
      mutate(
        {
          currentInfo: currentUserInfo,
          changes: {
            nickname: nickname,
            introduce: descripton
          }
        },
        {
          onSuccess: () => {
            openAlert('프로필 수정이 완료되었습니다!');
          },
          onError: () => {
            openAlert('프로필 수정 중 오류가 발생했습니다.');
          }
        }
      );
    } catch (error) {
      openAlert('이미지 업로드 중 오류가 발생했습니다.');
      console.error('이미지 업로드 중 에러 발생', error);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    setImg,
    setNickname,
    setDescripton,
    onClickEditMyProfile,
    description: descripton,
    isUploading
  };
};
