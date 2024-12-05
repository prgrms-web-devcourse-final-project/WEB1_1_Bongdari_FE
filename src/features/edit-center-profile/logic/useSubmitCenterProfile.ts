import { useEditCenterProfile } from '@/store/queries/center-mypage/useCenterProfile';
import { useQueryClient } from '@tanstack/react-query';

interface EditProfileRequest {
  name: string;
  contact_number: string;
  homepage_link: string;
  introduce: string;
}

const useCenterProfile = () => {
  const { mutate, isPending } = useEditCenterProfile();
  const queryClient = useQueryClient();

  const handleEditProfile = async (
    centerName: string,
    centerPhone: string,
    centerURL: string,
    centerIntroduction: string,
    preview: File | string | null,
    validURL: boolean,
    validPhone: boolean
  ) => {
    if (!centerName || !validPhone || !validURL) {
      alert('모든 필드를 올바르게 입력해주세요.');
      return;
    }

    const formData = new FormData();

    const jsonProfileData: EditProfileRequest = {
      name: centerName,
      contact_number: centerPhone,
      homepage_link: centerURL,
      introduce: centerIntroduction
      // img_file: preview instanceof File ? preview : undefined
    };

    formData.append('data', JSON.stringify(jsonProfileData));

    // 이미지 파일이 있는 경우에만 추가
    if (preview instanceof File) {
      formData.append('img_file', preview);
    }

    mutate(jsonProfileData, {
      onSuccess: (data) => {
        console.log('프로필이 성공적으로 수정되었습니다.', data);
        queryClient.invalidateQueries({ queryKey: ['centerProfile'] }); // 캐시에 저장된 프로필 데이터 무효화 -> 새로 서버에서 데이터 가져옴 (자동 새로고침)
        alert('프로필이 성공적으로 수정되었습니다.');
      },
      onError: (error) => {
        console.error('프로필 수정 중 오류가 발생했습니다.', error);
        alert('프로필 수정 중 오류가 발생했습니다.');
      }
    });
  };

  return {
    isSubmitting: isPending,
    handleEditProfile
  };
};

export default useCenterProfile;
